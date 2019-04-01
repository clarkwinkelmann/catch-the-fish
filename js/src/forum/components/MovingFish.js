import app from 'flarum/app';
import classList from 'flarum/utils/classList';
import Component from 'flarum/Component';
import FishImage from './FishImage';
import CaughtFishModal from '../modals/CaughtFishModal';

/* global m */

export default class MovingFish extends Component {
    view() {
        const {fish} = this.props;

        return m('.catchthefish-moving-fish', {
            className: classList({
                'catchthefish-animate-flip': app.forum.catchTheFishAnimateFlip(),
            }),
            onclick: () => {
                if (!fish.canCatch() && !app.session.user) {
                    alert(app.translator.trans('clarkwinkelmann-catch-the-fish.forum.moving-fish.login'));
                    return;
                }

                app.request({
                    method: 'POST',
                    url: app.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + fish.id() + '/catch',
                    data: fish.placement(),
                }).then(result => {
                    app.modal.show(new CaughtFishModal({
                        fish: app.store.pushPayload(result),
                    }));

                    // So the parent can remove the fish from the relationship
                    if (this.props.oncatch) {
                        this.props.oncatch();
                    }
                });
            },
        }, [
            m('.catchthefish-name', fish.name()),
            FishImage.component({
                fish,
            }),
        ]);
    }
}

import app from 'flarum/app';
import Component from 'flarum/Component';
import FishImage from './FishImage';
import CaughtFishModal from '../modals/CaughtFishModal';

/* global m */

export default class MovingFish extends Component {
    view() {
        const {fish} = this.props;

        return m('.catchthefish-moving-fish', {
            onclick: () => {
                if (!fish.canCatch()) {
                    if (!app.session.user) {
                        alert('Login to catch fishes');
                    } else {
                        alert('Catching fishes is restricted to certain groups');
                    }
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

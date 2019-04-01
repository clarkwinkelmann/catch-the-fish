import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import EditFish from '../components/EditFish';

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.new-fish-modal.';

export default class NewFishModal extends Modal {
    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    content() {
        return m('.Modal-body', [
            EditFish.component({
                round: this.props.round,
                onsave: () => {
                    this.hide();

                    if (this.props.oncreateordelete) {
                        this.props.oncreateordelete();
                    }
                },
            }),
        ]);
    }
}

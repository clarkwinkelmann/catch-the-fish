import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import EditFish from '../components/EditFish';

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-fish-modal.';

export default class EditRoundModal extends Modal {
    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans(translationPrefix + 'title', {
            name: this.props.fish.name(),
        });
    }

    content() {
        return m('.Modal-body', [
            EditFish.component({
                fish: this.props.fish,
                ondelete: () => {
                    this.hide();

                    if (this.props.oncreateordelete) {
                        this.props.oncreateordelete();
                    }
                },
            }),
        ]);
    }
}

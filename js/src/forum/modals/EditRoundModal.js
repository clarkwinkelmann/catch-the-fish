import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import EditRound from '../components/EditRound';

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-round-modal.';

export default class EditRoundModal extends Modal {
    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans(translationPrefix + 'title', {
            name: this.props.round.name(),
        });
    }

    content() {
        return m('.Modal-body', [
            EditRound.component({
                round: this.props.round,
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

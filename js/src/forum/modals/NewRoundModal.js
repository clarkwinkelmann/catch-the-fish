import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import EditRound from '../components/EditRound';

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.new-round-modal.';

export default class NewRoundModal extends Modal {
    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    content() {
        return m('.Modal-body', [
            EditRound.component({
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

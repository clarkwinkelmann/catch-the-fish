import app from 'flarum/app';
import CTFSettingsModal from './modals/CTFSettingsModal';

export default function () {
    app.extensionSettings['clarkwinkelmann-catch-the-fish'] = () => app.modal.show(new CTFSettingsModal());
}

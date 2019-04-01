import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

const settingsPrefix = 'catch-the-fish.';
const translationPrefix = 'clarkwinkelmann-catch-the-fish.admin.settings.';

export default class CTFSettingsModal extends SettingsModal {
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        // TODO: list settings
        return [
            <p>coming</p>,
        ];
    }
}

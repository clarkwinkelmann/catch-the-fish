import app from 'flarum/app';
import addSettingsModal from './addSettingsModal';
import addPermissions from './addPermissions';

app.initializers.add('clarkwinkelmann-catch-the-fish', () => {
    addSettingsModal();
    addPermissions();
});

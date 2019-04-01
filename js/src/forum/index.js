import {extend} from 'flarum/extend';
import app from 'flarum/app';
import addModels from './addModels';
import addFishBasket from './addFishBasket';
import addDropAreas from './addDropAreas';
import addPages from './addPages';
import addNavLinks from './addNavLinks';
import addRoundAlert from './addRoundAlert';

app.initializers.add('clarkwinkelmann-catch-the-fish', () => {
    addModels();
    addFishBasket();
    addDropAreas();
    addPages();
    addNavLinks();
    addRoundAlert();
});

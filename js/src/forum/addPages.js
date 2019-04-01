import app from 'flarum/app';
import RoundList from './pages/RoundList';
import RoundSettings from './pages/RoundSettings';

export default function () {
    app.routes.catchTheFishRounds = {
        path: '/catch-the-fish/rounds',
        component: RoundList.component(),
    };

    app.routes.catchTheFishRound = {
        path: '/catch-the-fish/rounds/:id',
        component: RoundSettings.component(),
    };
}

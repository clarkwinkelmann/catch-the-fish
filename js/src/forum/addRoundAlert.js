import {override} from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import RoundAlert from './components/RoundAlert';

export default function () {
    override(IndexPage.prototype, 'hero', function (original) {
        const existing = original();

        const rounds = app.forum.catchTheFishActiveRounds();

        if (!rounds) {
            return existing;
        }

        // Replace missing rounds with null. Happens if you delete a round and go back to homepage
        const additional = rounds.map(round => round ? RoundAlert.component({
            round,
        }) : null);

        if (Array.isArray(existing)) {
            return round.concat(existing);
        }

        return m('div', [
            additional,
            existing,
        ]);
    });
}

import app from 'flarum/app';
import Page from 'flarum/components/Page';
import RoundRankings from "../components/RoundRankings";

/* global m */

export default class Rankings extends Page {
    view() {
        if (!app.forum.catchTheFishCanSeeRankingsPage()) {
            return m('.container', m('p', 'You dont\'t have permission to see the rankings'));
        }

        const rounds = app.forum.catchTheFishActiveRounds();

        return m('.container', [
            m('h2', 'Rankings'),
            rounds ? rounds.map(round => RoundRankings.component({
                round,
            })) : m('p', 'No active rounds'),
        ]);
    }
}

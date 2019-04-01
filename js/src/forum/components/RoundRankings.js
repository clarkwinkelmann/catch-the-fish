import app from 'flarum/app';
import Page from 'flarum/components/Page';
import User from "./User";

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.table-ranking.';

export default class RoundRankings extends Page {
    init() {
        super.init();

        this.rankings = null;

        app.request({
            method: 'GET',
            url: app.forum.attribute('apiUrl') + '/catch-the-fish/rounds/' + this.props.round.id() + '/rankings',
        }).then(result => {
            this.rankings = app.store.pushPayload(result);
            m.redraw();
        });
    }

    view() {
        if (this.rankings === null) {
            return m('p', app.translator.trans(translationPrefix + 'loading'));
        }

        return m('div', [
            m('h2', app.translator.trans(translationPrefix + 'title', {
                name: this.props.round.name(),
            })),
            m('table.catchthefish-table', [
                m('thead', m('tr', [
                    m('th', app.translator.trans(translationPrefix + 'rank')),
                    m('th', app.translator.trans(translationPrefix + 'count')),
                    m('th', app.translator.trans(translationPrefix + 'user')),
                ])),
                m('tbody', this.rankings.map((ranking, index) => m('tr', [
                    m('td', '#' + (index + 1)),
                    m('td', ranking.catch_count()),
                    m('td', User.component({
                        user: ranking.user(),
                    })),
                ]))),
            ]),
        ]);
    }
}

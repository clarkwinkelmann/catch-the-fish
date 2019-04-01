import app from 'flarum/app';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Page from 'flarum/components/Page';

/* global m */

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
            return m('p', 'Loading...');
        }

        return m('div', [
            m('h2', 'Rankings of round' + this.props.round.name()),
            m('table.catchthefish-table', [
                m('thead', m('tr', [
                    m('th', 'Place'),
                    m('th', 'Fishes caught'),
                    m('th', 'User'),
                ])),
                m('tbody', this.rankings.map((ranking, index) => m('tr', [
                    m('td', '#' + (index + 1)),
                    m('td', ranking.catch_count()),
                    m('td', m('a', {
                        href: app.route.user(ranking.user()),
                        config: m.route,
                    }, [
                        avatar(ranking.user()),
                        ' ',
                        username(ranking.user()),
                    ])),
                ]))),
            ]),
        ]);
    }
}

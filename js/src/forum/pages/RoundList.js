import app from 'flarum/app';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';
import NewRoundModal from '../modals/NewRoundModal';
import EditRoundModal from '../modals/EditRoundModal';

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.table-round.';

export default class RoundList extends Page {
    init() {
        super.init();

        this.refreshRounds();
    }

    refreshRounds() {
        this.rounds = null;

        app.request({
            method: 'GET',
            url: app.forum.attribute('apiUrl') + '/catch-the-fish/rounds',
        }).then(result => {
            this.rounds = app.store.pushPayload(result);
            m.redraw();
        });
    }

    view() {
        if (this.rounds === null) {
            return m('.container', m('p', app.translator.trans(translationPrefix + 'loading')));
        }

        return m('.container', [
            m('h2', app.translator.trans(translationPrefix + 'title')),
            Button.component({
                className: 'Button Button--primary',
                onclick: () => {
                    app.modal.show(new NewRoundModal({
                        oncreateordelete: () => {
                            this.refreshRounds();
                        },
                    }));
                },
                children: app.translator.trans(translationPrefix + 'new'),
            }),
            m('table.catchthefish-table', [
                m('thead', m('tr', [
                    m('th', app.translator.trans(translationPrefix + 'name')),
                    m('th', app.translator.trans(translationPrefix + 'start')),
                    m('th', app.translator.trans(translationPrefix + 'end')),
                    m('th', app.translator.trans(translationPrefix + 'actions')),
                ])),
                m('tbody', this.rounds.map(round => m('tr', [
                    m('td', round.name()),
                    m('td', round.starts_at()),
                    m('td', round.ends_at()),
                    m('td', [
                        Button.component({
                            className: 'Button',
                            onclick: () => {
                                app.modal.show(new EditRoundModal({
                                    round,
                                    oncreateordelete: () => {
                                        this.refreshRounds();
                                    },
                                }));
                            },
                            children: app.translator.trans(translationPrefix + 'edit'),
                        }),
                        ' ',
                        LinkButton.component({
                            className: 'Button',
                            href: app.route('catchTheFishRound', {
                                id: round.id(),
                            }),
                            children: app.translator.trans(translationPrefix + 'fishes'),
                        }),
                    ]),
                ]))),
            ]),
        ]);
    }
}

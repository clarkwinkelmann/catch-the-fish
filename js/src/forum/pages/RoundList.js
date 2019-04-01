import app from 'flarum/app';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';
import NewRoundModal from '../modals/NewRoundModal';
import EditRoundModal from '../modals/EditRoundModal';

/* global m */

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
            return m('.container', m('p', 'Loading...'));
        }

        return m('.container', [
            m('h2', 'Rounds'),
            Button.component({
                className: 'Button Button--primary',
                onclick: () => {
                    app.modal.show(new NewRoundModal({
                        oncreateordelete: () => {
                            this.refreshRounds();
                        },
                    }));
                },
                children: 'New',
            }),
            m('table.catchthefish-table', [
                m('thead', m('tr', [
                    m('th', 'Name'),
                    m('th', 'From'),
                    m('th', 'To'),
                    m('th', 'Actions'),
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
                            children: 'Edit',
                        }),
                        ' ',
                        LinkButton.component({
                            className: 'Button',
                            href: app.route('catchTheFishRound', {
                                id: round.id(),
                            }),
                            children: 'Fishes',
                        }),
                    ]),
                ]))),
            ]),
        ]);
    }
}

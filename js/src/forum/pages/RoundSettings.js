import app from 'flarum/app';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import NewFishModal from '../modals/NewFishModal';
import EditFishModal from '../modals/EditFishModal';
import FishImage from '../components/FishImage';
import User from "../components/User";

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.table-fish.';

export default class RoundSettings extends Page {
    init() {
        super.init();

        this.roundId = m.route.param('id');
        this.round = app.store.getById('catchthefish-round', this.roundId);

        if (!this.round) {
            app.store.find('catch-the-fish/rounds', this.roundId).then(round => {
                this.round = round;
                m.redraw();
            });
        }

        this.refreshFishes();
    }

    refreshFishes() {
        this.fishes = null;

        app.request({
            method: 'GET',
            url: app.forum.attribute('apiUrl') + '/catch-the-fish/rounds/' + this.roundId + '/fishes',
        }).then(result => {
            this.fishes = app.store.pushPayload(result);
            m.redraw();
        });
    }

    view() {
        if (!this.round || this.fishes === null) {
            return m('.container', m('p', app.translator.trans(translationPrefix + 'loading')));
        }

        return m('.container', [
            m('h2', app.translator.trans(translationPrefix + 'title', {
                name: this.round.name(),
            })),
            Button.component({
                className: 'Button Button--primary',
                onclick: () => {
                    app.modal.show(new NewFishModal({
                        round: this.round,
                        oncreateordelete: () => {
                            this.refreshFishes();
                        },
                    }));
                },
                children: app.translator.trans(translationPrefix + 'new'),
            }),
            m('table.catchthefish-table', [
                m('thead', m('tr', [
                    m('th', app.translator.trans(translationPrefix + 'image')),
                    m('th', app.translator.trans(translationPrefix + 'name')),
                    m('th', app.translator.trans(translationPrefix + 'user-name')),
                    m('th', app.translator.trans(translationPrefix + 'user-place')),
                    m('th', app.translator.trans(translationPrefix + 'actions')),
                ])),
                m('tbody', this.fishes.length === 0 ? m('tr', [
                    m('td', 'No fishes'),
                ]) : this.fishes.map(fish => m('tr', [
                    m('td', FishImage.component({
                        fish,
                    })),
                    m('td', fish.name()),
                    m('td', fish.namedBy() ? User.component({
                        user: fish.namedBy(),
                    }) : m('em', app.translator.trans(translationPrefix + 'no-user-name'))),
                    m('td', fish.placedBy() ? User.component({
                        user: fish.placedBy(),
                    }) : m('em', app.translator.trans(translationPrefix + 'no-user-place'))),
                    m('td', [
                        Button.component({
                            className: 'Button',
                            onclick: () => {
                                app.modal.show(new EditFishModal({
                                    fish,
                                    oncreateordelete: () => {
                                        this.refreshFishes();
                                    },
                                }));
                            },
                            children: app.translator.trans(translationPrefix + 'edit'),
                        }),
                    ]),
                ]))),
            ]),
        ]);
    }
}

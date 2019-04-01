import app from 'flarum/app';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import NewFishModal from '../modals/NewFishModal';
import EditFishModal from '../modals/EditFishModal';
import FishImage from '../components/FishImage';

/* global m */

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
            return m('.container', m('p', 'Loading...'));
        }

        return m('.container', [
            m('h2', 'Settings for round ' + this.round.name()),
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
                children: 'New',
            }),
            m('table.catchthefish-table', [
                m('thead', m('tr', [
                    m('th', 'Image'),
                    m('th', 'Name'),
                    m('th', 'Actions'),
                ])),
                m('tbody', this.fishes.length === 0 ? m('tr', [
                    m('td', 'No fishes'),
                ]) : this.fishes.map(fish => m('tr', [
                    m('td', FishImage.component({
                        fish,
                    })),
                    m('td', fish.name()),
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
                            children: 'Edit',
                        }),
                    ]),
                ]))),
            ]),
        ]);
    }
}

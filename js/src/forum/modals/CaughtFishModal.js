import app from 'flarum/app';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import FishImage from '../components/FishImage';

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.caught-fish-modal.';

export default class CaughtFishModal extends Modal {
    init() {
        super.init();

        this.newName = m.prop(this.props.fish.name());
        this.dirty = false;
        this.loading = false;
    }

    className() {
        return 'Modal--small catchthefish-catch-modal';
    }

    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    saveNameAndPlacement(randomPlacement = false) {
        const data = {};

        if (this.dirty) {
            data.name = this.newName();
        }

        if (randomPlacement) {
            data.placement = 'random';
        }

        if (data) {
            this.loading = true;

            app.request({
                method: 'POST',
                url: app.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + this.props.fish.id() + '/place',
                data,
            }).then(result => {
                app.store.pushPayload(result);
                this.hide();

                if (this.props.fish.canPlace() && !randomPlacement) {
                    // Refresh basket by reloading user
                    app.store.find('users', app.session.user.id()).then(() => {
                        m.redraw();
                    });
                }
            }).catch(err => {
                this.loading = false;
                m.redraw();
                throw err;
            });
        } else {
            this.hide();

            if (this.props.fish.canPlace() && !randomPlacement) {
                // Refresh basket by reloading user
                app.store.find('users', app.session.user.id()).then(() => {
                    m.redraw();
                });
            }
        }
    }

    content() {
        const {fish} = this.props;

        const namedBy = fish.namedBy();
        const placedBy = fish.placedBy();

        return m('.Modal-body', [
            m('h3','"' + fish.name() + '"'),
            FishImage.component({
                fish,
            }),
            namedBy ? m('p', [
                app.translator.trans(translationPrefix + 'named-by'),
                ' ',
                m('a', {
                    href: app.route.user(namedBy),
                    config: m.route,
                }, [
                    avatar(namedBy),
                    ' ',
                    username(namedBy),
                ]),
            ]) : null,
            placedBy ? m('p', [
                app.translator.trans(translationPrefix + 'placed-by'),
                ' ',
                m('a', {
                    href: app.route.user(placedBy),
                    config: m.route,
                }, [
                    avatar(placedBy),
                    ' ',
                    username(placedBy),
                ]),
            ]) : null,
            m('p', app.translator.trans(translationPrefix + 'congratulation')),
            fish.canName() ? m('.Form-group', [
                m('p', app.translator.trans(translationPrefix + 'name-help')),
                m('label', app.translator.trans(translationPrefix + 'name')),
                m('input.FormControl', {
                    value: this.newName(),
                    oninput: m.withAttr('value', value => {
                        this.newName(value);
                        this.dirty = true;
                    }),
                }),
            ]) : null,
            fish.canPlace() ? m('p', app.translator.trans(translationPrefix + 'placement-help')) : null,
            m('.Form-group', Button.component({
                className: 'Button Button--primary Button--block',
                type: 'button',
                loading: this.loading,
                children: app.translator.trans(translationPrefix + (this.dirty ? (fish.canPlace() ? 'submit-name-place-later' : 'submit-name') : (fish.canPlace() ? 'submit-place-later' : 'submit-continue'))),
                onclick: () => {
                    this.saveNameAndPlacement();
                },
            })),
            fish.canPlace() ? m('.Form-group', Button.component({
                className: 'Button Button--primary Button--block',
                type: 'button',
                loading: this.loading,
                children: app.translator.trans(translationPrefix + (this.dirty ? 'submit-name-place-random' : 'submit-place-random')),
                onclick: () => {
                    this.saveNameAndPlacement(true);
                },
            })) : null,
        ]);
    }
}

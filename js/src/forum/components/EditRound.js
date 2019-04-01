import app from 'flarum/app';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Switch from 'flarum/components/Switch';

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-round.';

export default class EditRound extends Component {
    init() {
        this.round = this.props.round;
        this.dirty = false;
        this.processing = false;

        if (typeof this.round === 'undefined') {
            this.initNewRecord();
        }
    }

    initNewRecord() {
        this.round = app.store.createRecord('catchthefish-rounds', {
            attributes: {
                name: '',
                starts_at: '',
                ends_at: moment().add(1, 'day').toISOString(),
                include_starting_pack: true,
            },
        });
    }

    view() {
        return m('form', [
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'name')),
                m('input.FormControl', {
                    value: this.round.name(),
                    oninput: m.withAttr('value', this.updateAttribute.bind(this, 'name')),
                }),
                m('.helpText', app.translator.trans(translationPrefix + 'name-help')),
            ]),
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'starts-at')),
                m('input.FormControl', {
                    value: this.round.starts_at(),
                    oninput: m.withAttr('value', this.updateAttribute.bind(this, 'starts_at')),
                }),
            ]),
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'ends-at')),
                m('input.FormControl', {
                    value: this.round.ends_at(),
                    oninput: m.withAttr('value', this.updateAttribute.bind(this, 'ends_at')),
                }),
            ]),
            this.round.exists ? '' : m('.Form-group', [
                m('label', [
                    Switch.component({
                        state: this.round.include_starting_pack(),
                        onchange: this.updateAttribute.bind(this, 'include_starting_pack'),
                        children: app.translator.trans(translationPrefix + 'starting-pack'),
                    }),
                ]),
                m('.helpText', app.translator.trans(translationPrefix + 'starting-pack-help')),
            ]),
            m('.ButtonGroup', [
                Button.component({
                    type: 'submit',
                    className: 'Button Button--primary',
                    children: app.translator.trans(translationPrefix + (this.round.exists ? 'save' : 'create')),
                    loading: this.processing,
                    disabled: !this.readyToSave(),
                    onclick: this.saveRecord.bind(this),
                }),
                (this.round.exists ? Button.component({
                    type: 'button',
                    className: 'Button Button--danger',
                    children: app.translator.trans(translationPrefix + 'delete'),
                    loading: this.processing,
                    onclick: this.deleteRecord.bind(this),
                }) : ''),
            ]),
        ]);
    }

    updateAttribute(attribute, value) {
        this.round.pushAttributes({
            [attribute]: value,
        });

        this.dirty = true;
    }

    readyToSave() {
        if (!this.round.name()) {
            return false;
        }

        return this.dirty;
    }

    saveRecord() {
        this.processing = true;

        this.round.save(this.round.data.attributes).then(() => {
            if (this.props.onsave) {
                this.props.onsave();
            }

            this.processing = false;
            this.dirty = false;
            m.redraw();
        }).catch(err => {
            this.processing = false;
            m.redraw();
            throw err;
        });
    }

    deleteRecord() {
        if (!confirm(app.translator.trans(translationPrefix + 'delete-confirmation', {
            name: this.round.name(),
        }).join(''))) {
            return;
        }

        this.processing = true;

        this.round.delete().then(() => {
            if (this.props.ondelete) {
                this.props.ondelete();
            }

            this.processing = false;
            m.redraw();
        }).catch(err => {
            this.processing = false;
            m.redraw();
            throw err;
        });
    }
}

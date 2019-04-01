import app from 'flarum/app';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-fish.';

export default class EditFish extends Component {
    init() {
        this.fish = this.props.fish;
        this.dirty = false;
        this.processing = false;

        if (typeof this.fish === 'undefined') {
            this.initNewRecord();
        }
    }

    initNewRecord() {
        this.fish = app.store.createRecord('catchthefish-fishes', {
            attributes: {
                round_id: this.props.round.id(),
                name: '',
            },
        });
    }

    view() {
        return m('form', [
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'name')),
                m('input.FormControl', {
                    value: this.fish.name(),
                    oninput: m.withAttr('value', this.updateAttribute.bind(this, 'name')),
                }),
                m('.helpText', app.translator.trans(translationPrefix + 'name-help')),
            ]),
            m('.ButtonGroup', [
                Button.component({
                    type: 'submit',
                    className: 'Button Button--primary',
                    children: app.translator.trans(translationPrefix + (this.fish.exists ? 'save' : 'create')),
                    loading: this.processing,
                    disabled: !this.readyToSave(),
                    onclick: this.saveRecord.bind(this),
                }),
                (this.fish.exists ? Button.component({
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
        this.fish.pushAttributes({
            [attribute]: value,
        });

        this.dirty = true;
    }

    readyToSave() {
        if (!this.fish.name()) {
            return false;
        }

        return this.dirty;
    }

    saveRecord() {
        this.processing = true;

        this.fish.save(this.fish.data.attributes).then(() => {
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
            name: this.fish.name(),
        }).join(''))) {
            return;
        }

        this.processing = true;

        this.fish.delete().then(() => {
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

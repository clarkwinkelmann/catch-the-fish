import app from 'flarum/app';
import Component from 'flarum/Component';

/* global m */

export default class DropArea extends Component {
    view() {
        return m('.catchthefish-drop-area', app.translator.trans('clarkwinkelmann-catch-the-fish.forum.drop-area.message'));
    }
}

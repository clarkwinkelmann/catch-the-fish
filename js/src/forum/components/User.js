import app from 'flarum/app';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Component from 'flarum/Component';

/* global m */

export default class DropArea extends Component {
    view() {
        const {user} = this.props;

        return m('a', {
            href: app.route.user(user),
            config: m.route,
        }, [
            avatar(user),
            ' ',
            username(user),
        ]);
    }
}

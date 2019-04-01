import app from 'flarum/app';
import Component from 'flarum/Component';
import Alert from 'flarum/components/Alert';

/* global m, moment */

class AlertWithContainer extends Alert {
    view() {
        const vdom = super.view();

        vdom.children = [
            m('.container', vdom.children),
        ];

        return vdom;
    }
}

export default class UpdateAlert extends Component {
    view() {
        return AlertWithContainer.component({
            type: 'info',
            children: app.translator.trans('clarkwinkelmann-catch-the-fish.forum.round-alert.message', {
                name: this.props.round.name(),
                time: moment(this.props.round.ends_at()).calendar(),
            }),
            dismissible: false,
        });
    }
}

import app from 'flarum/app';
import Component from 'flarum/Component';
import Alert from 'flarum/components/Alert';
import LinkButton from 'flarum/components/LinkButton';

/* global m, moment */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.round-alert.';

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
            children: [
                app.translator.trans(translationPrefix + 'message', {
                    name: this.props.round.name(),
                    time: moment(this.props.round.ends_at()).calendar(),
                }),
                app.forum.catchTheFishCanSeeRankingsPage() ? [
                    ' ',
                    LinkButton.component({
                        className: 'Button',
                        children: app.translator.trans(translationPrefix + 'rankings'),
                        href: app.route('catchTheFishRankings'),
                    }),
                ] : null,
            ],
            dismissible: false,
        });
    }
}

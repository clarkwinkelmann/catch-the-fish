import app from 'flarum/app';
import Component from 'flarum/Component';

/* global m */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.fish-image.';

export default class FishImage extends Component {
    view() {
        const src = this.props.fish.image_url();

        if (src) {
            return m('img.catchthefish-image', {
                alt: app.translator.trans(translationPrefix + 'alt', {
                    name: this.props.fish.name(),
                }).join(''),
                src,
            });
        }

        return m('.catchthefish-no-image', app.translator.trans(translationPrefix + 'missing'));
    }
}

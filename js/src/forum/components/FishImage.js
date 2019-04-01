import Component from 'flarum/Component';

/* global m */

export default class FishImage extends Component {
    view() {
        const src = this.props.fish.image_url();

        if (src) {
            return m('img.catchthefish-image', {
                alt: 'Image of fish ' + this.props.fish.name(),
                src,
            });
        }

        return m('.catchthefish-no-image', 'Missing fish image');
    }
}

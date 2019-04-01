import app from 'flarum/app';
import Component from 'flarum/Component';
import FishImage from './FishImage';

/* global m, moment */

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.basket.';

export default class Basket extends Component {
    view() {
        if (!app.session.user) {
            return m('div');
        }

        const basket = app.session.user.catchTheFishBasket();

        if (!basket || basket.length === 0) {
            return m('div');
        }

        return m('.catchthefish-basket', [
            m('.catchthefish-basket-title', app.translator.trans(translationPrefix + 'title')),
            m('p', app.translator.trans(translationPrefix + 'drag-help')),
            basket.map(fish => m('.catchthefish-basket-entry', [
                m('.catchthefish-basket-fish', {
                    draggable: true,
                    ondragstart(event) {
                        event.dataTransfer.setData('text/plain', 'fish:1');
                    },
                }, FishImage.component({
                    fish,
                })),
                m('.catchthefish-basket-time', app.translator.trans(translationPrefix + 'time', {
                    time: moment(fish.placeUntil()).fromNow(),
                })),
            ])),
        ]);
    }
}

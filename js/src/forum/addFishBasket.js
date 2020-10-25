import {extend} from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import Basket from './components/Basket';

/* global m */

export default function () {
    extend(HeaderPrimary.prototype, 'items', items => {
        items.add('catchthefish-basket', m(Basket));
    });
}

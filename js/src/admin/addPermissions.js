import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';

const PERMISSIONS = [
    'visible',
    'participate',
    'choose-place',
    'choose-name',
    'moderate',
];

export default function () {
    extend(PermissionGrid.prototype, 'viewItems', items => {
        PERMISSIONS.forEach((permission, index) => {
            items.add('catchthefish-' + permission, {
                icon: 'fas fa-fish',
                label: app.translator.trans('clarkwinkelmann-catch-the-fish.admin.permissions.' + permission),
                permission: 'catchthefish.' + permission,
                allowGuest: index === 0,
            });
        });
    });
}

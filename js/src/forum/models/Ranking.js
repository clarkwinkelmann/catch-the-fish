import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Fish extends mixin(Model, {
    catch_count: Model.attribute('catch_count'),
    user: Model.hasOne('user'),
}) {
    //
}

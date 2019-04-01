import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Fish extends mixin(Model, {
    name: Model.attribute('name'),
    starts_at: Model.attribute('starts_at'),
    ends_at: Model.attribute('ends_at'),
    include_starting_pack: Model.attribute('include_starting_pack'),
}) {
    apiEndpoint() {
        return '/catch-the-fish/rounds' + (this.exists ? '/' + this.data.id : '');
    }
}

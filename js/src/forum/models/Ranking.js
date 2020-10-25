import Model from 'flarum/Model';

export default class Ranking extends Model {
    catch_count = Model.attribute('catch_count');
    user = Model.hasOne('user');
}

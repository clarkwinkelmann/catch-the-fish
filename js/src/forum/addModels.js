import app from 'flarum/app';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';
import Post from 'flarum/models/Post';
import User from 'flarum/models/User';
import Forum from 'flarum/models/Forum';
import Fish from './models/Fish';
import Ranking from "./models/Ranking";
import Round from './models/Round';

export default function () {
    app.store.models['catchthefish-fishes'] = Fish;
    app.store.models['catchthefish-rankings'] = Ranking;
    app.store.models['catchthefish-rounds'] = Round;

    Discussion.prototype.catchTheFishFishes = Model.hasMany('catchTheFishFishes');
    Post.prototype.catchTheFishFishes = Model.hasMany('catchTheFishFishes');
    User.prototype.catchTheFishFishes = Model.hasMany('catchTheFishFishes');
    User.prototype.catchTheFishBasket = Model.hasMany('catchTheFishBasket');
    Forum.prototype.catchTheFishActiveRounds = Model.hasMany('catchTheFishActiveRounds');
    Forum.prototype.catchTheFishCanModerate = Model.attribute('catchTheFishCanModerate');
    Forum.prototype.catchTheFishCanSeeRankingsPage = Model.attribute('catchTheFishCanSeeRankingsPage');
    Forum.prototype.catchTheFishCanSeeProfileRankings = Model.attribute('catchTheFishCanSeeProfileRankings');
    Forum.prototype.catchTheFishAnimateFlip = Model.attribute('catchTheFishAnimateFlip');
}

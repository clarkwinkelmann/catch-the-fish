import {extend} from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.nav.';

export default function () {
    extend(IndexPage.prototype, 'navItems', function (items) {
        if (app.forum.catchTheFishCanSeeRankingsPage()) {
            items.add('catchthefish-rankings', LinkButton.component({
                icon: 'fas fa-fish',
                href: app.route('catchTheFishRankings'),
            }, app.translator.trans(translationPrefix + 'rankings')));
        }

        if (app.forum.catchTheFishCanModerate()) {
            items.add('catchthefish-settings', LinkButton.component({
                icon: 'fas fa-fish',
                href: app.route('catchTheFishRounds'),
            }, app.translator.trans(translationPrefix + 'settings')));
        }
    });
}

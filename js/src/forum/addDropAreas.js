import {extend, override} from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import DropArea from './components/DropArea';
import MovingFish from './components/MovingFish';

function fishIdFromEvent(event) {
    const data = event.dataTransfer.getData("text/plain");

    const match = /^fish:([0-9]+)$/.exec(data);

    return match ? match[1] : null;
}

export default function () {
    override(CommentPost.prototype, 'content', function (content) {
        const addContent = [];

        if (this.fishDragOver) {
            addContent.push(DropArea.component());
        }

        const fishes = this.props.post.catchTheFishFishes();

        if (fishes) {
            fishes.forEach(fish => {
                addContent.push(MovingFish.component({
                    fish,
                    oncatch: () => {
                        this.props.post.pushData({
                            relationships: {
                                catchTheFishFishes: {
                                    data: [],
                                },
                            },
                        });
                    },
                }));
            });
        }

        return content().concat(addContent);
    });

    extend(CommentPost.prototype, 'init', function () {
        this.fishDragOver = false;

        // Add a condition to the tree retainer
        this.subtree.check(() => this.fishDragOver);
    });

    extend(CommentPost.prototype, 'attrs', function (attrs) {
        attrs.ondrop = event => {
            this.fishDragOver = false;
            const fishId = fishIdFromEvent(event);

            if (fishId) {
                event.preventDefault();

                const fish = app.store.getById('catchthefish-fishes', fishId);

                if (fish) {
                    app.request({
                        method: 'POST',
                        url: app.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + fish.id() + '/place',
                        data: {
                            placement: {
                                post_id: this.props.post.id(),
                            },
                        },
                    }).then(result => {
                        app.store.pushPayload(result);

                        // Refresh basket my reloading user
                        //app.store.find('users', app.session.user.id());
                    });
                } else {
                    alert('Invalid fish');
                }
            }
        };
        attrs.ondragover = event => {
            const fishId = fishIdFromEvent(event);

            if (fishId) {
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';
                this.fishDragOver = true;
            }
        };
        attrs.ondragenter = event => {
            event.preventDefault();
        };
        attrs.ondragleave = () => {
            this.fishDragOver = false;
        };
    });
}

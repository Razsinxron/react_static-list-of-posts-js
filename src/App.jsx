import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const serverProps = postsFromServer.map(posts => ({
  ...posts,
  users: usersFromServer.find(user => user.id === posts.userId),
  comments: commentsFromServer.filter(comment => comment.postId === posts.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList serverProps={serverProps} />
  </section>
);

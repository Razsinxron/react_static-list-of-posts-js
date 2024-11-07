import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ postProp }) => {
  const { title, body, users, comments } = postProp;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={users} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />
      {comments.length ? (
        <CommentList commentList={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};

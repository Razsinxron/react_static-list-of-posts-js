import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ commentList }) => {
  return (
    <div className="CommentList">
      {commentList.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

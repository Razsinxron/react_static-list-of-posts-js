import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ serverProps }) => {
  // console.log('server', serverProps);

  return (
    <div className="PostList">
      {serverProps.map(postProp => (
        <PostInfo key={postProp.id} postProp={postProp} />
      ))}
    </div>
  );
};

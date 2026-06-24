import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, comments }) => {
  const filteredComments = comments.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={post.user} key={post.id} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {filteredComments.length === 0 && (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

      {filteredComments.length !== 0 && (
        <CommentList comments={filteredComments} />
      )}
    </div>
  );
};

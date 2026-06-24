// import { comments } from '../../App';
// import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <div key={post.id}>
        <PostInfo post={post} comments={comments} />
      </div>
    ))}
  </div>
);

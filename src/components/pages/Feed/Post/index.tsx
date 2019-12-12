import './styles.css';

import React from 'react';

import PostAction from './PostAction';
import PostComments from './PostComments';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostSendCommentForm from './PostSendCommentForm';

interface IProps {
  post: any;
}

const Post: React.FC<IProps> = props => {
  return (
    <div className="post">
      <PostHeader name={props.post.name} date={props.post.date} image={props.post.image} />
      <PostContent content={props.post.content} />
      <PostAction likes={props.post.likes} comments={props.post.comments.length} />
      <PostComments comments={props.post.comments} />
      <PostSendCommentForm postId={props.post.id} />
    </div>
  );
};

export default Post;


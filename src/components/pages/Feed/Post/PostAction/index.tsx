import React from 'react';

import { ReactComponent as CommentIcon } from '../../../../../assets/img/comment.svg';
import { ReactComponent as LikeIcon } from '../../../../../assets/img/like.svg';

interface IProps {
  likes: number;
  comments: number;
}

const PostAction: React.FC<IProps> = props => {
  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <LikeIcon />
        <span>{props.likes} Likes</span>
      </div>
      <div className="post-comment-icon commented">
        <CommentIcon />
        <span>{props.comments} Comment</span>
      </div>
    </div>
  );
};

export default PostAction;

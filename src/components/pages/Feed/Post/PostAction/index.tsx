import React from "react";

import { ReactComponent as CommentIcon } from "../../../../../assets/img/comment.svg";
import { ReactComponent as LikeIcon } from "../../../../../assets/img/like.svg";
import { IPost } from "../../../../../redux/reducers/posts";

interface IPostAction {
  likes: IPost["likes"];
  comments: IPost["comments"];
}

const PostAction = (props: IPostAction) => {
  const commentText =
    props.comments.length <= 1
      ? `${props.comments.length} Comment`
      : `${props.comments.length} Comments`;

  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <LikeIcon />
        <span>{props.likes} Likes</span>
      </div>
      <div className="post-comment-icon commented">
        <CommentIcon />
        <span>{commentText}</span>
      </div>
    </div>
  );
};

export default PostAction;

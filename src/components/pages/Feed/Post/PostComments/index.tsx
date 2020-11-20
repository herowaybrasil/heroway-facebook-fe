import React from "react";

import Person from "../../../../../assets/img/person3.jpg";
import { IPost } from "../../../../../redux/reducers/posts";

interface IPostComments {
  comments: IPost["comments"];
}

const PostComments = (props: IPostComments) => {
  return (
    <div className="post-comments">
      {props.comments.map((comment) => {
        return (
          <div key={`${comment.name}-${comment.comment}`} className="comment">
            <div className="comment-profile-image">
              <div className="comment-image-board">
                <img src={comment.image} alt={comment.name} title={comment.name} />
              </div>
            </div>
            <div className="comment-content">
              <div className="comment-profile-name">{comment.name}</div>
              <div className="comment-text">{comment.comment}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostComments;

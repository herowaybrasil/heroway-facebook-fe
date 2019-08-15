import React from 'react';

interface IProps {
  comments: any[];
}

const PostComments: React.FC<IProps> = props => {
  return (
    <div className="post-comments">
      {props.comments.map(comment => {
        return (
          <div key={comment.comment} className="comment">
            <div className="comment-profile-image">
              <div className="comment-image-board">
                <img src={comment.image} alt="Profile" />
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

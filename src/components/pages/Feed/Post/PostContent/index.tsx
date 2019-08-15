import React from 'react';

import PostImage from '../../../../../assets/img/post-image.jpg';

interface IProps {
  content: string;
}

const PostContent: React.FC<IProps> = props => {
  return (
    <>
      <div className="post-content">{props.content}</div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={PostImage} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default PostContent;

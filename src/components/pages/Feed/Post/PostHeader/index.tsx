import React from 'react';

interface IProps {
  name: string;
  date: string;
  image: string;
}

const PostHeader: React.FC<IProps> = props => {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={props.image} alt="Profile" />
        </div>
      </div>
      <div className="post-header-pofile-name">
        <div className="profile-name">{props.name}</div>
        <div className="post-date">{props.date}</div>
      </div>
    </div>
  );
};

export default PostHeader;

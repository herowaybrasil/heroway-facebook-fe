import React from "react";

import { IPost } from "../../../../../redux/reducers/posts";

interface IPostHeader {
  image: IPost["image"];
  name: IPost["name"];
  date: IPost["date"];
}

const PostHeader = (props: IPostHeader) => {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={props.image} alt={`Usuário ${props.name}`} title={`Usuário ${props.name}`} />
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">{props.name}</div>
        <div className="post-date">{props.date}</div>
      </div>
    </div>
  );
};

export default PostHeader;

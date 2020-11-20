import React from "react";

import PostImage from "../../../../../assets/img/post-image.jpg";
import { IPost } from "../../../../../redux/reducers/posts";

interface IPostContent {
  content: IPost["content"];
  image: IPost["postImage"];
}

const PostContent = (props: IPostContent) => {
  return (
    <>
      <div className="post-content">{props.content}</div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={props.image} alt="A imagem do post" title="A imagem do post" />
        </div>
      </div>
    </>
  );
};

export default PostContent;

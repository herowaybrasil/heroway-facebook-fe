import React from "react";
import postsReducer, { IPost } from "../../../../redux/reducers/posts";

import PostAction from "./PostAction";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostSendCommentForm from "./PostSendCommentForm";

interface IPosts {
  posts: IPost[];
}

const Post = (props: IPosts) => {
  if (props.posts.length === 0) {
    return null;
  }

  return (
    <div className="post">
      {props.posts.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <PostHeader image={post.image} name={post.name} date={post.date} />
            <PostContent content={post.content} image={post.postImage} />
            <PostAction likes={post.likes} comments={post.comments} />
            <PostComments comments={post.comments} />
            <PostSendCommentForm postId={post.id} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Post;

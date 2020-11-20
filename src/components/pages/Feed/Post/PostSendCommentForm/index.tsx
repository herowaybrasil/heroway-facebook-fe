import React from "react";
import * as ReactRedux from "react-redux";
import { IReducers } from "../../../../../redux/configureStore";
import { sendComment, setTypingAction } from "../../../../../redux/reducers/comments";
import { IPost } from "../../../../../redux/reducers/posts";

interface IPostSendCommentForm {
  postId: IPost["id"];
}

let TIMEOUT_ID = null;
const PostSendCommentForm = (props: IPostSendCommentForm) => {
  const dispatch = ReactRedux.useDispatch();

  const commentsState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.comments;
  });

  function handleChange(event) {
    const value = event.currentTarget.value;

    dispatch(setTypingAction(true, value));

    clearTimeout(TIMEOUT_ID);
    TIMEOUT_ID = setTimeout(() => {
      dispatch(setTypingAction(false, value));
    }, 1000);
  }

  function handleKeyDown(event) {
    const value = event.currentTarget.value;

    if (event.key === "Enter") {
      dispatch(sendComment(props.postId, value));
    }
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={commentsState.text}
          type="text"
          placeholder="Write your comment"
        />
      </div>
    </div>
  );
};

export default PostSendCommentForm;

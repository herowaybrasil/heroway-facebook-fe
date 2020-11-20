import { IReducers } from "../../configureStore";
import { updatePostComment } from "../posts";

const TYPING = '@comments/TYPING';

const SEND_COMMENT_LOADING = '@comments/SEND_COMMENT_LOADING';
const SEND_COMMENT_SUCCESS = '@comments/SEND_COMMENT_SUCCESS';
const SEND_COMMENT_FAIL = '@comments/SEND_COMMENT_ERROR';

interface ICommentsInitialState {
  typing: boolean;
  text: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: ICommentsInitialState = {
  typing: false,
  text: '',
  loading: false,
  error: false,
}
export default function commentsReducer(state = INITIAL_STATE, action: any): ICommentsInitialState {
  switch (action.type) {
    case TYPING:
      return {
        ...INITIAL_STATE,
        typing: action.payload.typing,
        text: action.payload.text
      };

    case SEND_COMMENT_LOADING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case SEND_COMMENT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };

    case SEND_COMMENT_FAIL:
      return {
        ...INITIAL_STATE,
        error: true,
      };

    default:
      return state;
  }
}

export function sendComment(postId: string, comment: string) {
  return async (dispatch, getState) => {
    const state: IReducers = getState();
    const user = state.github.user;

    dispatch({ type: SEND_COMMENT_LOADING });

    try {
      const commentBody = {
        login: user.login,
        name: user.login,

        avatar_url: user.avatar_url,
        image: user.avatar_url,

        comment: comment
      };

      const url = `https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts/${postId}/comment`;
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(commentBody)
      }
      const response = await fetch(url, options);
      const json = await response.json();

      console.log(json);

      debugger;
      dispatch({ type: SEND_COMMENT_SUCCESS, json: json });
      dispatch(updatePostComment(postId, commentBody));
    } catch (e) {
      console.error(e);
      dispatch({ type: SEND_COMMENT_FAIL });
    }
  }
}

export function setTypingAction(typing: boolean, text: string) {
  return {
    type: TYPING,
    payload: {
      typing,
      text
    }
  }
}

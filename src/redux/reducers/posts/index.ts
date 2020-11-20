const GET_POSTS_LOADING = '@posts/POSTS_LOADING';
const GET_POSTS_SUCCESS = '@posts/POSTS_SUCCESS';
const GET_POSTS_FAIL = '@posts/POSTS_FAIL';

const UPDATE_POST_COMMENT = '@posts/UPDATE_POST_COMMENT';

export interface IPost {
  id: string;
  content: string;
  image: string;
  date: string;
  name: string;
  postImage: string;
  likes: boolean;
  comments: Array<{
    comment: string;
    image: string;
    name: string;
  }>
}

interface IPostsInitialState {
  loading: boolean;
  error: boolean;
  posts: IPost[];
}

const INITIAL_STATE: IPostsInitialState = {
  loading: false,
  error: false,
  posts: []
}
export default function postsReducer(state = INITIAL_STATE, action: any): IPostsInitialState {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        posts: action.posts,
      };

    case GET_POSTS_FAIL:
      return {
        ...INITIAL_STATE,
        error: true,
      };

    case UPDATE_POST_COMMENT: {
      const newPosts = state.posts.map((post) => {
        const isEquals = post.id === action.payload.postId;

        if (isEquals) {
          const newComments = post.comments.concat(action.payload.comment);

          return {
            ...post,
            comments: newComments
          }
        }

        return post;
      });


      return {
        ...state,
        posts: newPosts
      };
    }

    default:
      return state;
  }
}

export function getPostsAction() {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS_LOADING });

    try {
      const url = 'https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts';
      const response = await fetch(url);
      const postsJson = await response.json();

      dispatch({ type: GET_POSTS_SUCCESS, posts: postsJson.posts });
    } catch (e) {
      console.error(e);
      dispatch({ type: GET_POSTS_FAIL });
    }
  }
}

export function updatePostComment(postId: string, comment: any) {
  return {
    type: UPDATE_POST_COMMENT,
    payload: {
      postId,
      comment
    }
  }

}

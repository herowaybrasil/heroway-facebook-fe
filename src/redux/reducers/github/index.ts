const GET_GITHUB_USER_LOADING = '@github/GET_GITHUB_USER_LOADING';
const GET_GITHUB_USER_SUCCESS = '@github/GET_GITHUB_USER_SUCCESS';
const GET_GITHUB_USER_FAIL = '@github/GET_GITHUB_USER_FAIL';

export interface IUser {
  login: string;
  avatar_url: string;
}

interface IGithubInitialState {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  user: IUser;
}

const GITHUB_INITIAL_STATE: IGithubInitialState = {
  loading: false,
  error: false,
  errorMessage: null,
  user: null
}

export default function githubReducer(state = GITHUB_INITIAL_STATE, action: any): IGithubInitialState {
  switch (action.type) {
    case GET_GITHUB_USER_LOADING:
      return {
        ...GITHUB_INITIAL_STATE,
        loading: true,
      };

    case GET_GITHUB_USER_SUCCESS:
      return {
        ...GITHUB_INITIAL_STATE,
        user: action.payload.user,
        errorMessage: action.payload.errorMessage
      };

        case GET_GITHUB_USER_FAIL:
      return {
        ...GITHUB_INITIAL_STATE,
        error: true,
      };

    default:
      return state;
  }
}

export function getGithubUser(query: string) {
  return async (dispatch) => {
    dispatch(getGithubUserLoading());

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const json = await response.json();
      const user = json.items[0];

      dispatch(getGithubUserSuccess(user));
    } catch (e) {
      console.error(e);
      dispatch(getGithubUserFail());
    }
  }
}

function getGithubUserLoading() {
  return {
    type: GET_GITHUB_USER_LOADING
  }
}

function getGithubUserSuccess(user) {
  return {
    type: GET_GITHUB_USER_SUCCESS,
    payload: {
      user: user,
      errorMessage: !user ? 'Usuário não encontrado' : null
    }
  }
}

function getGithubUserFail() {
  return {
    type: GET_GITHUB_USER_FAIL
  }
}

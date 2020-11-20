export const TYPING = '@comments/TYPING';

export const SEND_COMMENT_LOADING = '@comments/SEND_COMMENT_LOADING';
export const SEND_COMMENT_SUCCESS = '@comments/SEND_COMMENT_SUCCESS';
export const SEND_COMMENT_FAIL = '@comments/SEND_COMMENT_ERROR';

export interface ICommentsInitialState {
  typing: boolean;
  text: string;
  loading: boolean;
  error: boolean;
}

export const INITIAL_STATE: ICommentsInitialState = {
  typing: false,
  text: '',
  loading: false,
  error: false,
}

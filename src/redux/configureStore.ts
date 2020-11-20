import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import githubReducer from './reducers/github';
import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';

// responsável por agrupar todos os nossos reducers
const reducers = {
  github: githubReducer,
  posts: postsReducer,
  comments: commentsReducer
};

// responsável por executar automaticamente a nossa função githubReducer
const rootReducer = Redux.combineReducers(reducers);
export type IReducers = ReturnType<typeof rootReducer>;

function configureStore() {
  // responsável por complementar o redux com funções extras
  const middlewares = Redux.applyMiddleware(ReduxThunk);
  const enhancers = ReduxDevTools.composeWithDevTools(middlewares);

  // responsável por disponibilizar os dados para a aplicação
  const store = Redux.createStore(rootReducer, enhancers);
  return store;
}

export default configureStore;

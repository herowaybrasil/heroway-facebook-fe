import React from "react";
import { useHistory } from "react-router-dom";
import * as ReactRedux from "react-redux";

import { PATHS } from "../../../config/constants";

import Post from "./Post";
import ProfileSidebar from "./ProfileSidebar";
import { IReducers } from "../../../redux/configureStore";
import { getPostsAction } from "../../../redux/reducers/posts";

const Feed = () => {
  const history = useHistory();
  const dispatch = ReactRedux.useDispatch();

  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });

  const postsState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.posts;
  });

  React.useEffect(() => {
    if (!githubState.user) {
      history.push(PATHS.LOGIN);
    }
  }, [githubState, history]);

  React.useEffect(() => {
    if (githubState.user) {
      const actionResult = getPostsAction();
      dispatch(actionResult);
    }
  }, [githubState.user, dispatch]);

  if (!githubState.user) {
    return null;
  }

  return (
    <>
      <div className="feed">
        <div className="container">
          {postsState.loading && <h1>LOADING...</h1>}
          {postsState.error && <h1>OPS...</h1>}
          <Post posts={postsState.posts} />
        </div>
      </div>

      <ProfileSidebar user={githubState.user} />
    </>
  );
};

export default Feed;

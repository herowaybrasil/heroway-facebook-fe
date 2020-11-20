import React from "react";
import * as ReactRedux from "react-redux";

import { IReducers } from "../../../../../redux/configureStore";
import { IUser } from "../../../../../redux/reducers/github";
import Typing from "../Typing";

interface IProfileInfo {
  user: IUser;
}

const ProfileInfo = (props: IProfileInfo) => {
  const commentsState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.comments;
  });

  return (
    <>
      <div className="profile-image">
        {commentsState.typing && <Typing />}

        <div className="image-board">
          <img src={props.user.avatar_url} alt="Profile" />
        </div>
      </div>
      <div className="profile-name">
        <span>{props.user.login}</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;

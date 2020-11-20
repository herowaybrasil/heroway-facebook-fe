import React from "react";
import { IUser } from "../../../../redux/reducers/github";

import ProfileInfo from "./ProfileInfo";

interface IProfileSidebar {
  user: IUser;
}

const ProfileSidebar = (props: IProfileSidebar) => {
  return (
    <div className="profile">
      <ProfileInfo user={props.user} />
    </div>
  );
};

export default ProfileSidebar;

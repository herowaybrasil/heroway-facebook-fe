import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../../../redux/configureStore';
import Typing from '../Typing';

interface IProps {
  sendCommentState: any;
  loginState: any;
}

class ProfileInfo extends React.Component<IProps> {
  render() {
    return (
      <>
        <div className="profile-image">
          {this.props.sendCommentState.typing && <Typing />}

          <div className="image-board">
            <img src={this.props.loginState.user.avatar_url} alt="Profile" />
          </div>
        </div>
        <div className="profile-name">
          <span>{this.props.loginState.user.login}</span>
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
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    sendCommentState: state.sendComment,
    loginState: state.login
  };
};

export default ReactRedux.connect(mapStateToProps)(ProfileInfo);

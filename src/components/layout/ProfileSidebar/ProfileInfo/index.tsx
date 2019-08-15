import React from 'react';
import * as ReactRedux from 'react-redux';

import Person from '../../../../assets/img/person1.jpg';
import { IAppState } from '../../../../redux/configureStore';
import Typing from '../Typing';

interface IProps {
  sendCommentState: any;
}

class ProfileInfo extends React.Component<IProps> {
  render() {
    return (
      <>
        <div className="profile-image">
          {this.props.sendCommentState.typing && <Typing />}

          <div className="image-board">
            <img src={Person} alt="Profile" />
          </div>
        </div>
        <div className="profile-name">
          <span>Amarilda Curvada</span>
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
    sendCommentState: state.sendComment
  };
};

export default ReactRedux.connect(mapStateToProps)(ProfileInfo);

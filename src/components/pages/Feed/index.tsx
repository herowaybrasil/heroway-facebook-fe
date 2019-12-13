import React from 'react';
import * as ReactRedux from 'react-redux';
import { Redirect } from 'react-router';

import { IAppState } from '../../../redux/configureStore';
import { getPosts } from '../../../redux/reducers/posts';
import Post from './Post';
import ProfileSidebar from './ProfileSidebar';

interface IStateProps {
  postsState: any;
  loginState: any;
}

interface IDispatchProps {
  getPosts: () => void;
}

type IProps = IStateProps & IDispatchProps;

class Feed extends React.Component<IProps> {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (!this.props.loginState.user) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <div className="feed">
          <div className="container">
            {this.props.postsState.posts.map((post: any) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </div>
        <ProfileSidebar />
      </>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    postsState: state.posts,
    loginState: state.login
  };
};

const mapDispatchToProps: IDispatchProps = {
  getPosts
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Feed);

import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { getPosts } from '../../../redux/reducers/posts';
import Post from './Post';

interface IStateProps {
  postsState: any;
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
    return (
      <div className="feed">
        <div className="container">
          {this.props.postsState.posts.map((post: any) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    postsState: state.posts
  };
};

const mapDispatchToProps: IDispatchProps = {
  getPosts
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Feed);

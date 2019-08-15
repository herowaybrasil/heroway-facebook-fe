import React from 'react';
import * as ReactRedux from 'react-redux';

import { IAppState } from '../../../../../redux/configureStore';
import { sendComment, updateCommentTyping } from '../../../../../redux/reducers/sendComment';

interface IProps {
  postId: number;
  sendCommentState: any;
  sendComment: (postId: number, comment: string) => void;
  updateCommentTyping: (isTyping: boolean) => void;
}

class PostSendCommentForm extends React.Component<IProps> {
  timeout: any = null;

  state = {
    comment: ""
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ comment: event.target.value });
    this.activeTyping();
  };

  onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.props.sendComment(this.props.postId, this.state.comment);
      this.setState({ comment: "" });
    }
  };

  activeTyping = () => {
    if (this.props.sendCommentState.typing === true) {
      clearTimeout(this.timeout);
    }

    this.props.updateCommentTyping(true);

    this.timeout = setTimeout(() => {
      this.props.updateCommentTyping(false);
    }, 1000);
  };

  render() {
    return (
      <div className="post-send-comment">
        <div className="post-send-form">
          <input
            type="text"
            placeholder="Write your comment"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={this.state.comment}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    sendCommentState: state.sendComment
  };
};

const mapDispatchToProps = {
  sendComment,
  updateCommentTyping
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PostSendCommentForm);

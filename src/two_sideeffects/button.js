import React from "react";
import Button from "@material-ui/core/Button";
import ChatAPI from "internet/chats.js";

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOnline: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = this.state.count;
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({ isOnline: status.isOnline });
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <Button variant="contained" onClick={this.handleClick}>
        {this.state.count}
      </Button>
    );
  }
}

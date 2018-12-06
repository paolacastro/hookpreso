import React from "react";
import Button from "@material-ui/core/Button";

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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

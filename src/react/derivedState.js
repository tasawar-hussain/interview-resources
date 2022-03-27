import React, { Fragment, Component } from "react";
import { render } from "react-dom";

// This component illustrates a getDerivedStateFromProps anti-pattern.
// Don't copy this approach!
class EmailInput extends Component {
  state = {
    email: this.props.email
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ email: nextProps.email });
  }
}

class Parent extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <Fragment>
        <h1>This demo illustrates a derived state anti-pattern</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState(prevState => ({
          count: prevState.count + 1
        }))}>Click me</button>
        <blockquote>Type in the box below:</blockquote>
        <EmailInput email={`example@google.com+${this.state.count}`} />
      </Fragment>
    );
  }
}

render(<Parent />, document.getElementById("root"));

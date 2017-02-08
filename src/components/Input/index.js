import React, { Component, PropTypes } from 'react';
require('./style.css');

class Input extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    threshold: PropTypes.number.isRequired,
    value: PropTypes.string,
  }

  state = {
    value: ' ',
  };

  changeHandler = (event) => {
    const value = event.target.value;

    if (value.length >= this.props.threshold) {
      this.props.callback();
    }

    this.setState({
      value,
    });
  }

  render () {
    setTimeout(() => {
      document.getElementById('input').focus();
    }, 1);

    return (
      <div className="container">
        <input
          className="input"
          id="input"
          onChange={this.changeHandler}
          value={this.state.value}
        ></input>
        <label className="label" htmlFor="input">
          <span className="labelWrap">{this.state.value}</span>
        </label>
      </div>
    );
  }
}

export default Input;

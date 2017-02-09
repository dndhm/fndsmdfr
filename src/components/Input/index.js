import React, { Component, PropTypes } from 'react';
require('./style.css');

class Input extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    callbackThreshold: PropTypes.number.isRequired,
    value: PropTypes.string,
  }

  state = {
    value: ' ',
  };

  // TODO: Fix sting formatting
  formats = {
    60: {
      fn: string => `${string.slice(0, string.length - 59)}
        if (${string.slice(string.length - 60, string.length - 50)}
         && ${string.slice(string.length - 49, string.length - 40)}) {
          ${string.slice(string.length - 39, string.length)}
        }`,
    },
  }

  changeHandler = (event) => {
    const value = event.target.value;
    const valueLength = this.state.value.length;
    const formatLengths = Object.keys(this.formats);
    const divisibleFormat = formatLengths.find(length => valueLength % length === 0);

    if (divisibleFormat) {
      this.setState({
        value: this.formats[divisibleFormat].fn(value),
      });
    } else {
      this.setState({
        value,
      });
    }

    if (this.state.value.length >= this.props.callbackThreshold) {
      this.props.callback();
    }
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

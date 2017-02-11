import React, { Component, PropTypes } from 'react';
require('./style.css');

class Input extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }

  focus = element => element.focus();

  render () {
    return (
      <div className="container" ref="container">
        <input
          className="input"
          id="input"
          onChange={this.props.onChange}
          ref={this.focus}
          value={this.props.value}
        ></input>
        <label
          className="label"
          htmlFor="input"
          ref="label"
        >
          <span className="labelWrap">{this.props.value}</span>
        </label>
      </div>
    );
  }
}

export default Input;

import React, { Component, PropTypes } from 'react';
import lowlight from 'lowlight';

require('./style.css');

class Terminal extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }

  componentDidMount () {
    document.getElementById('input').addEventListener('keypress', this.handleKeypress);
  }

  componentWillReceiveProps ({ value }) {
    const highlightedValue = lowlight.highlightAuto(value).value;
    console.log("highlightedValue", highlightedValue);
  }

  componentWillUnmount () {
    document.getElementById('input').removeEventListener('keypress');
  }

  handleKeypress = (event) => {
    const pattern = new RegExp(/^([a-zA-Z0-9. !(){}'=<>|;&/\+-\\])+$/);
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
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

export default Terminal;

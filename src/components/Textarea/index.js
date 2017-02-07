import React, { Component, PropTypes } from 'react';

class TextArea extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    threshold: PropTypes.number.isRequired,
    value: PropTypes.string,
  }

  changeHandler = (val) => {
    if (val.length >= this.props.threshold) {
      this.props.callback();
    }
  }

  render () {
    const {
      placeholder,
    } = this.props;

    return (
      <textarea
        onChange={this.changeHandler}
        placeholder={placeholder}
        value=""
      ></textarea>
    );
  }
}

export default TextArea;

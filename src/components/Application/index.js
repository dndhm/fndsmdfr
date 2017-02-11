import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Input from '../Input';
import styles from './style.css';

const CodeFormat = props => {
  const colorStyle = styles['format-' + props.color];

  return (
    <span
      className={classnames(['codeFormat', colorStyle])}
    >
      {props.children}
    </span>
  );
};

CodeFormat.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

class Application extends Component {
  state = {
    value: '',
  }

  formats = {
    10: {
      fn: string => {
        const sliceStart = string.length - 10;
        const slice = string.slice(sliceStart - 1, string.length - 1);

        if (!slice.includes(' ')) {
          const position = sliceStart + Math.floor(Math.random() * 10);
          return `${string.slice(0, sliceStart - 1)}${string.slice(sliceStart - 1, position)} ${string.slice(position, string.length)}`;
        } else {
          return string;
        }
      },
    },
    101: {
      fn: string => {
        const sliceStart = string.length - 60;

        return (`${string.slice(0, sliceStart - 1)} if (${string.slice(sliceStart - 1, sliceStart + 20)}) {${string.slice(sliceStart + 20, string.length)}} `);
      },
    },
  }

  inputChange = event => {
    const value = event.target.value;
    const valueLength = this.state.value.length;
    const formatKeys = Object.keys(this.formats);
    const divisibleFormat = formatKeys.find(length => valueLength > 0 && (valueLength % length === 0));

    if (divisibleFormat) {
      this.setState({
        value: this.formats[divisibleFormat].fn(value),
      });
    } else {
      this.setState({
        value,
      });
    }
  }

  render () {
    return (
      <main ref="main">
        <Input
          callback={() => {}}
          callbackThreshold={100}
          onChange={this.inputChange}
          value={this.state.value}
        />
      </main>
    );
  }
}

export default Application;

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Food from '../Food';
import Terminal from '../Terminal';
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
  static propTypes = {
    foodThreshold: PropTypes.number,
  }

  static defaultProps = {
    foodThreshold: 200,
  }

  state = {
    showFood: false,
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
    33: {
      fn: string => {
        const sliceStart = string.length - 33;
        const slice = string.slice(sliceStart - 1, string.length - 1);

        if (!slice.includes('&&')) {
          const position = sliceStart + Math.floor(Math.random() * 33);
          return `${string.slice(0, sliceStart - 1)}${string.slice(sliceStart - 1, position)} && ${string.slice(position, string.length)}`;
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
    if (this.state.showFood) {
      return;
    }

    const value = event.target.value;
    const valueLength = this.state.value.length;
    const formatKeys = Object.keys(this.formats);
    const divisibleFormat = formatKeys.find(length => valueLength > 0
      && (valueLength % length === 0));
    const truncated = value > 1000
      ? value.slice(value.length - 1000, value.length)
      : value;

    if (divisibleFormat) {
      this.setState({
        value: this.formats[divisibleFormat].fn(truncated),
      });
    } else {
      this.setState({
        value: truncated,
      });
    }

    if (this.state.value.length > 0
      && this.state.value.length % this.props.foodThreshold === 0) {
      this.setState({
        showFood: true,
      });
      setTimeout(() => {
        this.setState({
          showFood: false,
        });
      }, 3000);
    }
  }

  render () {
    return (
      <main ref="main">
        <Terminal
          onChange={this.inputChange}
          value={this.state.value}
        />

        {
          this.state.showFood &&
          <Food />
        }
      </main>
    );
  }
}

export default Application;

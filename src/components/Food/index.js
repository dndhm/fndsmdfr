import React, { Component, PropTypes } from 'react';
require('./style.css');

class Food extends Component {
  static propTypes = {
    type: PropTypes.string,
    types: PropTypes.arrayOf(
      PropTypes.object,
    ),
  }

  static defaultProps = {
    types: [
      {
        image: 'images/cheeseburger.png',
        // audio: '../public/audio/cheeseburger.mp3',
      },
      {
        image: 'images/strawberry.png',
        // audio: require('./audio/strawberry.mp3'),
      },
    ],
  }

  render () {
    const type = this.props.type
      ? this.props.type
      : this.props.types[Math.floor(
        Math.random() * this.props.types.length)];

    return (
      <div className="foodContainer">
        <img
          className="foodImage"
          src={type.image}
        />
        {type.audio &&
          <audio
            autoPlay
            className=".foodAudio"
            src={type.audio}
          />
        }
      </div>
    );
  }
}

export default Food;

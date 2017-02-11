import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Food from './';

describe('Food', () => {
  it('should render image at random when no type prop is set', () => {
    const foodTypes = [
      {
        a: {
          image: 'a-img',
          audio: 'a-audio',
        },
      },
      {
        b: {
          image: 'b-img',
          audio: 'b-audio',
        },
      },
      {
        c: {
          image: 'c-img',
          audio: 'c-audio',
        },
      },
    ];
    const component = shallow(
      <Food
        types={foodTypes}
      />
    );
    const renderedImgSrc = component.find('img').props().src;
    expect(foodTypes.find(renderedImgSrc)).not.to.be.null;

  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { spy } from 'sinon';

import Input from './';

describe('TextArea', () => {
  it('should call onChange with value', () => {
    const onChangeSpy = spy();
    const component = shallow(
      <Input
        callback={() => {}}
        callbackThreshold=""
        onChange={onChangeSpy}
        value=""
      />
    );

    component.find('input').simulate('change', 'X');
    expect(onChangeSpy.calledWith('X')).to.be.true;
  });
});

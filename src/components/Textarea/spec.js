import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { spy } from 'sinon';

import TextArea from './';

describe('TextArea', () => {
  it('should display placeholder', () => {
    const component = shallow(
      <TextArea
        placeholder="Placeholder text"
      />
    );

    expect(component.find('textarea').props().placeholder).to.eql('Placeholder text');
  });

  it('should call callback when value length reaches threshold', () => {
    const callbackSpy = spy();
    const component = shallow(
      <TextArea
        callback={callbackSpy}
        threshold={10}
        value="012345678"
      />
    );

    component.simulate('change', '0123456789');
    expect(callbackSpy.called).to.be.true;
  });
});

import React from 'react';

import Input from '../Input';
require('./style.css');

export default () => {
  return (
    <main>
      <Input
        callback={() => {}}
        callbackThreshold={100}
      />
    </main>
  );
};

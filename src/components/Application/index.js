import React from 'react';

import Input from '../Input';
require('./style.css');

export default () => {
  return (
    <main>
      <Input
        callback={() => {}}
        threshold={100}
      />
    </main>
  );
};

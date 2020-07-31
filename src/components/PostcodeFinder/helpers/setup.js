import React from 'react';
import { shallow } from 'enzyme';
import PostcodeFinder from '../PostcodeFinder';

export const mountComponent = (props = {}) => shallow(
  <PostcodeFinder {...props} />
);

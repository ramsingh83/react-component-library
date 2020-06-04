import React from 'react';
import renderer from 'react-test-renderer';
import ContactDetails from './ContactDetails';

describe('ContactDetails', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<ContactDetails label="Email" placeholder="name@example.com" email="test@eamil.com" handleOnInputChanged={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

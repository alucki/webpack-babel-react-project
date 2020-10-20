import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('should render a title', () => {
    const { getByTestId } = render(<App />);
    const title = getByTestId('title');
    expect(title).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Logo from '.';

import { renderWithTheme } from '../../../helpers/Theme';

describe('Component: Logo', () => {
  it('should render', () => {
    const { container } = render(
      renderWithTheme(<Logo />)
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

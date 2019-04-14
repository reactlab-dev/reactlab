import { render, fireEvent, cleanup } from 'react-testing-library';
import * as React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

const renderWithRouter = (
  ui: React.ReactElement<any>,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export { fireEvent, cleanup };
export { renderWithRouter as render };

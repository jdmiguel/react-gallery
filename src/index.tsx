import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

import App from './App';

const store = configureStore({
  reducer
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));


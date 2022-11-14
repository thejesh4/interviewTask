import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "react-datepicker/dist/react-datepicker.css";

import rootReducer from './reducer';

const store = createStore(rootReducer);

import App from './App';


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

import React from 'react';
import { Provider } from 'react-redux';
import store from '../stores/store.jsx';
import AnimalCount from './animal-count.jsx';
import DevTools from '/client/imports/stores/dev-tools/dev-tools.jsx';

export default () =>
  <div>
    <Provider store={store}>
      <AnimalCount/>
    </Provider>
    <DevTools store={store}/>
  </div>;

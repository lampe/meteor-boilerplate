import React from 'react';
import {Provider} from 'react-redux';
import store from '../stores/store.jsx';
import AnimalCount from './animal-count.jsx';


export default (props) => {
  return (
    <div>
      <Provider store={store}>
        <AnimalCount/>
      </Provider>
    </div>
  )
}

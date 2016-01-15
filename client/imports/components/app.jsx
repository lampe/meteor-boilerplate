import React from 'react';
import {Provider} from 'react-redux';
import store from '../stores/app-store.jsx';
import AnimalCount from './animal-count.jsx';
import DevTools from '../dev-tools/dev-tools.jsx';

export default React.createClass({
  render(){
    return(
      <div>
      <Provider store={store}>
        <AnimalCount/>
      </Provider>
      <DevTools store={store}/>
      </div>
    )
  }
});

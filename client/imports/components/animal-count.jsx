import React from 'react';
import {connect} from 'react-redux';
import { compose, composeWithTracker, composeAll } from 'react-komposer';
import store from '/client/imports/stores/store.jsx';

let AnimalCount = (props, context)=>{
  return(
    <div>
      <h1 onClick={()=> context.store.dispatch({type: 'addBadger'})}>
        Badgers: {props.animals.badgers}
      </h1>
      <h1 onClick={()=> context.store.dispatch({type: 'addSausage'})}>
        Sausages: {props.animals.sausages}
      </h1>
      <h1 onClick={()=> context.store.dispatch({type: 'addFish'})}>
        Sausages: {props.animals.fishes}
      </h1>
    </div>
  )
}

let ReduxLoad = (props, context)=>{
  return(
    <h1>Redux Loading</h1>
  )
}

let TrackerLoad = (props, context)=>{
  return(
    <h1>Tracker Loading</h1>
  )
}

AnimalCount.contextTypes = {
  store: React.PropTypes.object.isRequired
}

// Data from redux as component props
const reduxUpdate = (props, onData) => {
  onData(null, {animals: store.getState().animals});

  store.subscribe(() => {
    const animals = store.getState().animals;
    onData(null, {animals});
  });
};

// Data using tracker as component props
const trackerUpdate = (props, onData) => {
  onData(null, { something: Session.get('test') });
};


export default composeAll(
  composeWithTracker(trackerUpdate, TrackerLoad),
  compose(reduxUpdate, ReduxLoad)

)(AnimalCount);

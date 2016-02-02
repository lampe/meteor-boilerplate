import combinedReducer from '../reducers/combined-reducer.jsx';
import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from './dev-tools/dev-tools.jsx';

// Reducers usually set their own initial state
// No need to do this globally
let initialState = {}

// Compose devtools into store
const finalCreateStore = compose(
  applyMiddleware(),
  DevTools.instrument()
)(createStore);

// Create store with appReducer and initialState
export default finalCreateStore(combinedReducer, initialState);

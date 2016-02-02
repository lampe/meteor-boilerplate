import combinedReducer from '../reducers/combined-reducer.jsx';
import { createStore, compose, applyMiddleware } from 'redux';


// Reducers usually set their own initial state
// No need to do this globally
let initialState = {}

// Compose devtools into store


// Create store with appReducer and initialState
window.something = createStore(combinedReducer, initialState);
export default window.something;

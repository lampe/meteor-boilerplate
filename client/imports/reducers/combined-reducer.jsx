import { combineReducers } from 'redux';
import animalReducer from './animal-reducer.jsx';

export default combineReducers({
  animals: animalReducer,
});

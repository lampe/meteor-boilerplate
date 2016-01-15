import appReducer from '../reducers/root-reducer.jsx';
import finalCreateStore from '../final-create-store/final-create-store.jsx';

let initialState = {
  badgers: 0,
  fishes: 0,
  sausages: 0
}

export default finalCreateStore(appReducer, initialState);

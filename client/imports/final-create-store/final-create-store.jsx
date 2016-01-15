import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../dev-tools/dev-tools.jsx';

export default finalCreateStore = compose(
  applyMiddleware(),
  DevTools.instrument()
)(createStore);

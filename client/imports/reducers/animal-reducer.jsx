export default (state = { fishes: 0, badgers: 0, sausages: 0 }, action) => {
  if (action.type === 'addFish') {
    return Object.assign({}, state, {
      fishes: state.fishes + 1,
    });
  }
  if (action.type === 'addBadger') {
    return Object.assign({}, state, {
      badgers: state.badgers + 1,
    });
  }
  if (action.type === 'addSausage') {
    return Object.assign({}, state, {
      sausages: state.sausages + 1,
    });
  }
  return state;
};

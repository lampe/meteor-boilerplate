import React from 'react';
import { connect } from 'react-redux';

const AnimalCount = (props) =>
  <div>
    <h1 onClick={ props.addFish }>
      Fishes: { props.fishes }
    </h1>
    <h1 onClick={ props.addBadger }>
      Badgers: { props.badgers }
    </h1>
    <h1 onClick={ props.addSausage }>
      Sausages: { props.sausages }
    </h1>
  </div>;

AnimalCount.propTypes = {
  fishes: React.PropTypes.number,
  badgers: React.PropTypes.number,
  sausages: React.PropTypes.number,
  addFish: React.PropTypes.func,
  addBadger: React.PropTypes.func,
  addSausage: React.PropTypes.func,
};

AnimalCount.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

// Which state should be passed as props?
function mapStateToProps(state) {
  return {
    fishes: state.animals.fishes,
    badgers: state.animals.badgers,
    sausages: state.animals.sausages,
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    addFish: () => dispatch({ type: 'addFish' }),
    addBadger: () => dispatch({ type: 'addBadger' }),
    addSausage: () => dispatch({ type: 'addSausage' }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalCount);

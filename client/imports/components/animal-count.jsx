import React from 'react';
import {connect} from 'react-redux';

let AnimalCount = (props, context)=>{
  return(
    <div>
      <h1 onClick={()=> context.store.dispatch({type: 'addFish'})}>
        Fishes: {props.fishes}
      </h1>
      <h1 onClick={()=> context.store.dispatch({type: 'addBadger'})}>
        Badgers: {props.badgers}
      </h1>
      <h1 onClick={()=> context.store.dispatch({type: 'addSausage'})}>
        Sausages: {props.sausages}
      </h1>
    </div>
  )
}

AnimalCount.contextTypes = {
  store: React.PropTypes.object.isRequired
}

// Which state should be passed as props?
function mapStateToProps(state) {
  return {
    fishes: state.animals.fishes,
    badgers: state.animals.badgers,
    sausages: state.animals.sausages
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    addFish: () => dispatch({type: 'addFish'}),
    addBadger: () => dispatch({type: 'addBadger'}),
    addSausage: () => dispatch({type: 'addSausage'})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalCount);

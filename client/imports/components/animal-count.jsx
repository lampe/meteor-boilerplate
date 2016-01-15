import React from 'react';
import {connect} from 'react-redux';

let AnimalCount = React.createClass({
  contextTypes: {
    store: React.PropTypes.object.isRequired
  },
  render(){
    return(
      <div>
        <h1 onClick={()=>{ this.context.store.dispatch({type: 'addFish'}) }}>Fishes: {this.props.fishes} </h1>
        <h1 onClick={()=>{ this.context.store.dispatch({type: 'addBadger'}) }}>Badgers: {this.props.badgers} </h1>
        <h1 onClick={()=>{ this.context.store.dispatch({type: 'addSausage'}) }}>Sausages: {this.props.sausages} </h1>
      </div>
    )
  }
});

// Which state should be passed as props?
function mapStateToProps(state) {
  return {
    fishes: state.fishes,
    badgers: state.badgers,
    sausages: state.sausages
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

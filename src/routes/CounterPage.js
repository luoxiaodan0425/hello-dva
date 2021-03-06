import React from 'react';
import Counter from '../components/Counter';
import propTypes from 'prop-types'
import { connect } from 'dva';

const CounterPage = ({counter,dispatch}) => {
    console.log(counter)
  return (
    <div>
      <p>Counter</p>
      <Counter counter={ counter } dispatch={dispatch} />
    </div>
  )
}


Counter.propTypes = {
    counter: propTypes.object
  }
const mapStateToProps = (state) => {
    return {
      counter: state.counter
    };
};
  
  export default connect(mapStateToProps)(CounterPage);
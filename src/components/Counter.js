import React from 'react';
// import { connect } from 'dva';
import propTypes from 'prop-types'

const Counter = ({counter,dispatch} ) => {
  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={ () => { dispatch({ type: 'counter/add' }) } }>+</button>
    </div>
  )
}

Counter.propTypes = {
    counter: propTypes.object
  }
// const mapStateToProps = (state) => {
//     return {
//       counter: state.counter
//     };
// };
  
// export default connect(mapStateToProps)(Counter);
export default Counter
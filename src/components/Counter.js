import React from 'react';
// import { connect } from 'dva';
import propTypes from 'prop-types'

const Counter = ({counter} ) => {
  return (
    <div>
      <h1>{counter.counter}</h1>
      <button>+</button>
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
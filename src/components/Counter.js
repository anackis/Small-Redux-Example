
import './main.css';
// import { connect } from 'react-redux';
import {inc, dec, res, rnd} from '../actions';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary dec">DEC</button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary inc">INC</button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary rnd">RND</button>
      <button onClick={() => dispatch(res())} className="btn btn-primary res">RES</button>
    </div>
  )
}

export default Counter;


// const mapStateToProps = (state) => {      // Taking state value from reducer every time when it changes. 
//   return {
//     counter: state.value
//   }
// }
// export default connect(mapStateToProps, actions)(Counter); 
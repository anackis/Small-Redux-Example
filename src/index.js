
import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux'
import { bindActionCreators } from 'redux';
import reducer from './reducer';
// import { inc, dec, rnd, res } from './actions';
import * as actions from './actions';       // Importing all functions from file and calling them actions



const store = createStore(reducer);    // Creating store that takes reducer 
const {dispatch, subscribe, getState} = store;       // Taking dispatch from store not to call every time store.dispatch     // As well alse taking subscribe from store 


const update = () => {
    // document.getElementById('counter').textContent = store.getState().value;
    document.getElementById('counter').textContent = getState().value;          // getState is a method that has Store - Show current state 
}


// store.subscribe(update);
subscribe(update);        // subscribe is a method that has Store - Every time that activates dispatch launch function // As well alse taking subscribe from store 


// const incDispatch = () => dispatch(inc());      // Using function to DRY code.  // To optimaze we create and use bindActionCreator 
// const decDispatch = () => dispatch(dec());
// const resDispatch = () => dispatch(res());
// const rndDispatch = (value) => dispatch(rnd(value));

// const bindActionCreator = (creator, dispatch) => (...args) => {     // Using bindActionCreators from redux the same as we had before but it already work from redux 
//     dispatch(creator(...args));
// }

// const incDispatch = bindActionCreator(inc, dispatch);      // Using function to DRY code.  // To optimaze we create and use bindActionCreator 
// const decDispatch = bindActionCreator(dec, dispatch);
// const resDispatch = bindActionCreator(res, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

// const incDispatch = bindActionCreators(inc, dispatch);      // Using bindActionCreators from redux the same as we had before but it already work from redux. 
// const decDispatch = bindActionCreators(dec, dispatch);      // As well allows as to put as first argument object 
// const resDispatch = bindActionCreators(res, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// const {incDispatch, decDispatch, resDispatch, rndDispatch} = bindActionCreators({    // Using bindActionCreators from redux the same as we had before but it already work from redux. 
//     incDispatch: inc,                                           // As well allows as to put as first argument object 
//     decDispatch: dec,
//     resDispatch: res,
//     rndDispatch: rnd
// }, dispatch);                                            // Not to call inc: inc etc we replace this with actions that we imported

const {inc, dec, res, rnd} = bindActionCreators( actions, dispatch);       // Not to call inc: inc etc we replace this with actions that we imported                
    

// document.getElementById('inc').addEventListener('click', () => {       // Using function to DRY code. 
//     // store.dispatch(inc());       // Taking dispatch from store not to call every time store.dispatch
//     dispatch(inc());          // dispatch is method that has Store - Takes Action 
// });

// document.getElementById('inc').addEventListener('click', incDispatch);      // Using function incDispatch to DRY code.       // Not to call inc: inc etc we replace this with actions that we imported     

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('res').addEventListener('click', res);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10) + 2;           // action.payload helps us to save clear function principle.  
    rnd(value);          // action.payload helps us to save clear function principle.  
});


ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

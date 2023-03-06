import React from 'react';
import ReactDOM from 'react-dom';
import {legacy_createStore as createStore} from 'redux'

// const initialState = 0;      // Example by using reducer witjout Redux 
// let state = reducer(initialState, {type: 'INC'})     // Example by using reducer witjout Redux 
//     state = reducer(state, {type: 'INC'})        // Example by using reducer witjout Redux 
//     state = reducer(state, {type: 'INC'})        // Example by using reducer witjout Redux 
// console.log(state);                              // Example by using reducer witjout Redux 



    // Redux with native JS 

const initialState = {value: 0};            // Usually there will be objects in initial value. 

const reducer = (state = initialState, action) => {        // Recucer that takes state and action. Have to contain only clear functions that do not came from dom or something else.
    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1
            };
        case "RND":      
            return {            // action.payload helps us to save clear function principle. 
                ...state,
                value: state.value * action.payload
            };
        case "RES":
            return {
                ...state,
                value: state.value = 0
            };
        default: 
            return state;
    }
}

const store = createStore(reducer);    // Creating store that takes reducer 

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;          // getState is a method that has Store - Show current state 
}

store.subscribe(update);        // subscribe is a method that has Store - Every time that activates dispatch launch function 

const inc = () => ({type: 'INC'});        // Action Creator. Helps not to reapet code {type: 'INC'} every time (DRY).
const dec = () => ({type: 'DEC'});          
const rnd = (value) => ({type: 'RND', payload: value});
const res = () => ({type: 'RES'});
     
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());          // dispatch is method that has Store - Takes Action 
});
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());          // dispatch is method that has Store - Takes Action 
});
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);           // action.payload helps us to save clear function principle.  
    store.dispatch(rnd(value));          // action.payload helps us to save clear function principle.  
});
document.getElementById('res').addEventListener('click', () => {          
    store.dispatch(res());          
});






ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

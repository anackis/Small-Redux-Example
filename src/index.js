

import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux'
import reducer from './reducer';
import { Provider } from 'react-redux';     // We nees Provider to provide props to App and to Counter inside the App
import App from './components/App';


const store = createStore(reducer,              // Creating store that takes reducer 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());    /// this line is additional it make work browser redux  extension  


ReactDOM.createRoot(document.getElementById("root"),)
.render(
  <React.StrictMode>
    <Provider store={store}>     
      <App />
    </Provider>
  </React.StrictMode>
);


// import Counter from './components/Counter';
// import { bindActionCreators } from 'redux';       // No more need because we using Provider

// import { inc, dec, rnd, res } from './actions';      // Importing all functions from file and calling them actions
// import * as actions from './actions';       // Importing all functions from file and calling them actions   // No more need because we using Provider


// const {dispatch, subscribe, getState} = store;       // No more need because we using Provider // Taking dispatch from store not to call every time store.dispatch // Taking subscribe from store 
// const {inc, dec, res, rnd} = bindActionCreators( actions, dispatch);   // No more need because we using Provider    // Not to call inc: inc etc we replace this with actions that we imported          

// const update = () => {             // No more need because we using Provider
//   ReactDOM.createRoot(
//     document.getElementById("root"),
//   )
//   .render(
//     <React.StrictMode>
//       {/* <Counter  
//         counter={getState().value}
//         inc={inc}
//         dec={dec}
//         res={res}
//         rnd={() => {
//           const value = Math.floor(Math.random() * 10) + 2;           
//           rnd(value);
//         }}
//       /> */}
//       <Provider store={store}>     
//         <App />
//       </Provider>
//     </React.StrictMode>
//   );
// }
// Provider looking all changes of props 

// update();    // No more need because we using Provider    /// To render first time component 
// subscribe(update);  // No more need because we using Provider  // subscribe is a method that has Store - Every time that activates dispatch launch function // As well alse taking subscribe from store 






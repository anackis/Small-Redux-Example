

const initialState = {counter: 0};            // Usually there will be objects in initial value. 

const reducer = (state = initialState, action) => {        // Recucer that takes state and action. Have to contain only clear functions that do not came from dom or something else.
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "RND":      
            return {            // action.payload helps us to save clear function principle. 
                ...state,
                counter: state.counter * action.payload
            };
        case "RES":
            return {
                ...state,
                counter: state.counter = 0
            };
        default: 
            return state;
    }
}

export default reducer;
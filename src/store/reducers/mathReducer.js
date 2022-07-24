import initialState from "../state/initialState";

// Create Reducers
function mathReducer(state= initialState, action){
    switch(action.type){
      case "ADD":
          state = {...state, no : state.no + action.payload}
        break;
      case "SUB":
        state = {...state, no : state.no - action.payload}        
        break;
    }
    return state;
  }

  export default mathReducer;
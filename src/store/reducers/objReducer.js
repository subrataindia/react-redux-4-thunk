import initialState from "../state/initialState";

function objReducer(state= initialState, action){
    switch(action.type){
      case "SETNAME":
          return {...state, personalDetails:{...state.personalDetails, name : action.payload}}
        break;
      case "SETAGE":
        state = {...state, personalDetails:{...state.personalDetails, age : action.payload}}        
        break;
    }
    return state;    
  }

export default objReducer;  
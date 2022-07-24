import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {connect, Provider} from 'react-redux'
import PersonalDetails from './PersonalDetailsContainer'
import Number from './NumberContainer'
import thunk from 'redux-thunk'

console.log("Testing Redux");
  
// Initial State
const initialState = {no:0, personalDetails:{name:'', age:''}};
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

// Create Store
const store = createStore(combineReducers({mathReducer, objReducer}),{}, applyMiddleware(thunk))
store.subscribe(() => {console.log("store updated...",store.getState())})

// Actions
function add(no){
  return {type:"ADD", payload: no}
}

function sub(no){
  return {type:"SUB", payload: no}
}

export function setName(name){
  return dispatch  => {
    setTimeout(() =>{
      dispatch({type:"SETNAME", payload: name})
    }, 2000)
  }
}

function setAge(age){
  return {type:"SETAGE", payload: age}
}

// Dispatch Actions
store.dispatch(add(1))
store.dispatch(add(3))
store.dispatch(sub(2))
store.dispatch(setName('Subrat'))
store.dispatch(setAge(45))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <h1>Redux 4.0</h1> 
          <PersonalDetails />
          <Number />
      </div>
    </Provider>
  );
}

export default App;
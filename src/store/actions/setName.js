export function setName(name){
    return dispatch  => {
      setTimeout(() =>{
        dispatch({type:"SETNAME", payload: name})
      }, 2000)
    }
  }

export default setName;  
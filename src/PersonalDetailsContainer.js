import { connect } from "react-redux"
import { setName } from "./App";
import PersonalDetailsComponent from "./PersonalDetailsComponent"

function mapStateToProps(state){
    return {
      math : state.mathReducer,
      obj: state.objReducer
    }
  }

function mapDispatchToProps(dispatch){
  return {
    setName : (name) => dispatch(setName(name))
  }
}  

export default connect(mapStateToProps,mapDispatchToProps)(PersonalDetailsComponent);  

  
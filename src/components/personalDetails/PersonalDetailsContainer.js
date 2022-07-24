import { connect } from "react-redux"
import PersonalDetailsComponent from "./PersonalDetailsComponent"
import { setName } from "../../store/actions"

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

  
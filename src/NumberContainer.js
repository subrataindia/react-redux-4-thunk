import { connect } from "react-redux"
import NumberComponent from "./NumberComponent"

function mapStateToProps(state){
    return{
        math: state.mathReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
      add : (no) => dispatch({
        type: "ADD",
        payload: no
      })
    }
  }  

export default connect(mapStateToProps, mapDispatchToProps)(NumberComponent);

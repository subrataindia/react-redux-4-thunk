import { connect } from "react-redux"
import NumberComponent from "./NumberComponent"
import {add} from '../../store/actions'

function mapStateToProps(state){
    return{
        math: state.mathReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
      add : (no) => dispatch(add(no))
    }
  }  

export default connect(mapStateToProps, mapDispatchToProps)(NumberComponent);

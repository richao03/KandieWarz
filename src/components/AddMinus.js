import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {AddCount, MinusCount} from '../action/numbers'

class AddMinus extends Component {



render(){
    return(
        <span>
        <button onClick={()=>this.props.AddCount(this.props.text)}>+</button>
        <button onClick={()=>this.props.MinusCount(this.props.text)}>-</button>
        </span>
        )
}
    
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({AddCount, MinusCount}, dispatch)
}
function mapStateToProps(state) {
    return {
        kandie: state
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddMinus)

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {DifferentClasses} from '../action/goingToClass'

class RandCost extends Component {



render(){
    return(
        <span>
        <button onClick={()=>this.props.DifferentClasses(this.props.kandies)}>Go</button>
      
        </span>
        )
}
    
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({DifferentClasses}, dispatch)
}
function mapStateToProps(state) {
    return {
        kandie: state
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RandCost)

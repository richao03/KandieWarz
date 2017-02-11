import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {GoToTrade, GoToClass, GoToHome} from '../action/topBar'

class TopBar extends Component {



render(){
    return(
        <span>
        <button onClick={()=>this.props.GoToTrade()}>TRADE</button>
        <button onClick={()=>this.props.GoToClass()}>CLASS</button>
        <button onClick={()=>this.props.GoToHome()}>HOME</button>
        </span>
        )
}
    
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({GoToHome, GoToClass, GoToTrade}, dispatch)
}
function mapStateToProps(state) {
    return {
        kandie: state
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TopBar)

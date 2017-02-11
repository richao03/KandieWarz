import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {AskForAdvance, BiggerBag} from '../action/home'

class Home extends Component {

    createListOfClasses() {

        console.log("asdfasdfasdfasdf", this)
    }


    render() {
        return (

            <div>
            {this.createListOfClasses()}
            <br/>
        <div>Save in Piggy Bank : <input/> </div>
        <br/>
        <div>
        Ask Mom for Advance :   <button id="adv500" onClick={()=>this.props.AskForAdvance(500)}>$500</button>  
                                <button id="adv1000" onClick={()=>this.props.AskForAdvance(1000)}>$1000</button>  
                                <button id="adv2000" onClick={()=>this.props.AskForAdvance(2000)}>$2000</button>
        </div>
        <br/>
        <div>
        Buy Bigger Bookbag :    <button onClick={()=>this.props.BiggerBag(5,500)}>+5 / $500</button> 
                                <button onClick={()=>this.props.BiggerBag(20,1500)}>+20/$1500</button>  
                                <button onClick={()=>this.props.BiggerBag(30,2200)}>+30/$2200</button>
        </div>
        <br/>
         <div>
        Call Bully : <button>Bully Jonny Snackers</button> <button>Bully Wilma Evee</button> <br/> <button>Bully Timmy Twax</button>
       <button>Bully Sally Skattles</button>   <button>Bully Kevin Kat Kit</button>
       </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({AskForAdvance, BiggerBag}, dispatch)
}
function mapStateToProps(state) {
    return {
        kandie: state
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)





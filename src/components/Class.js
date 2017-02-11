import React, { Component } from 'react';
import RandCost from './RandCost'

class Classes extends Component {

    createListOfClasses() {
     
        return this.props.StateFromApp.map((classes) => {
            return (
                <span key={classes.classes}>
                <br/>
             <div>
             {classes.classes}<RandCost/>
             </div>
             </span>
            )
        })
    }


    render() {
        return (
            <div>
        {this.createListOfClasses()}
            </div>
        )
    }
}



export default Classes

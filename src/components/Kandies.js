import React, { Component } from 'react';

import AddMinus from './AddMinus'
class Kandies extends Component {

    createListOfKandie() {
        return this.props.KandiesFromApp.map((kandie) => {
            return (
                <div key={kandie.name}>
                <br/>
                {kandie.name}:{kandie.count}
                <div>${kandie.cost}<AddMinus text={kandie.name}/></div>
            
                </div>

            )
        })
    }


    render() {
        return (
            <div>
        {this.createListOfKandie()}
        </div>
        )
    }
}



export default Kandies

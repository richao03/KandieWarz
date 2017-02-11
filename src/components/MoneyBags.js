import React, { Component } from 'react';


class MoneyBag extends Component {

    calculateMoney() {	
     return this.props.MawniesFromApp
    }


    render() {
        return (
            <div>
            <br/>
            MONEY BAG:
		{this.calculateMoney()}
		</div>
        )
    }
}



export default MoneyBag

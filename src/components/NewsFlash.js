import React, { Component } from 'react';


class NewsFlash extends Component {

    calculateMoney() {	
     return this.props.MawniesFromApp
    }


    render() {
        return (
            <div>
            <br/>
            News Flash:		{this.calculateMoney()}
		</div>
        )
    }
}



export default NewsFlash

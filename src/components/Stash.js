import React, { Component } from 'react';


class Stash extends Component {

    calculateStash() {	
    return (
        <span>
        {this.props.StashFromApp.inStash} / {this.props.StashFromApp.stashLimit}
        </span>
        )
    }
    


    render() {
        return (
            <div>
            <br/>
            Your Stash:
	{this.calculateStash()}
		</div>
        )
    }
}



export default Stash

import React, { Component } from 'react';

class Semester extends Component {

    calculateSemester() {	

    return (
        <span>
        {this.props.SemesterFromApp.day} / {this.props.SemesterFromApp.daysLeft}
        </span>
        )
    }
    


    render() {
        return (
            <div>
            <br/>
            Your Semester:
	{this.calculateSemester()}
		</div>
        )
    }
}



export default Semester

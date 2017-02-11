import React from 'react';
import MoneyBag from './MoneyBags'
import TopBar from './TopBar'
import { connect } from 'react-redux';
import whichToShow from './whichToShow'
import Stash from './Stash'
import Semester from './Semester'
import NewsFlash from './NewsFlash'

//which global state should be used in this component to which local property
const mapStateToProps = (state) => {
    console.log("STATE IN APP ********", state)
    return {
        kandies: state.reducer.kandies,
        location: state.locationReducer.location,
        classes: state.reducer.classes,
        mawnies: state.reducer.mawnies,
        stash: state.reducer.stash,
        semester: state.specialReducer,
        all:state
    }
}




class App extends React.Component {

    render() {
        return (
            <div className="container">
            <TopBar/>
           {whichToShow(this.props.kandies, this.props.location, this.props.classes,this.props.all)}       
            <MoneyBag MawniesFromApp={this.props.mawnies} />
            <Stash StashFromApp={this.props.stash}/>
            <Semester SemesterFromApp={this.props.semester} KandiesFromApp={this.props.kandies}/>
            <NewsFlash allFromApp ={this.props.all}/>
            </div>

        )
    }
}



//connects redux to react
export default connect(mapStateToProps, {})(App);

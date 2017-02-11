import React from 'react'
import Kandies from './Kandies';
import Classes from './Class'
import Home from './Home'

export default function whichToShow(kandies, location, classes,all){
    if(location === "home"){
       return(
          <Home AllFromApp={all}/>
        )
    }
    if(location ==="trade"){
        return(
             <Kandies KandiesFromApp={kandies} />
        )
    }
    if(location ==="class"){
        return(
            <Classes StateFromApp={classes}/>
        )
    }
}



//exported to components/APP.js
import './app.css'
import React from 'react';
import HeaderComponent from'./HeaderComponent/HeaderComponent';
import HomePage from './HomePage/Homepage';
import FadeIn from 'react-fade-in';
import Temperatrue from './Tempertature/Temperature';
import Humidity from './Humidity/Humidity';
import Watering from './WateringReport/Watering';
import Fertilise from './FertilisingReport/Fertilise';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
function App(props)
{
    return <FadeIn>
    <Router>
  
    <HeaderComponent />
    <main>
    <Switch>
    <Route path="/" exact>
        <HomePage />
    </Route>
    <Route path="/Home" exact>
        <HomePage />
    </Route>
    <Route path="/Temperature" exact>
        <Temperatrue/>
    </Route>
    <Route path="/Humidity" exact>
        <Humidity/>
    </Route>
    <Route path="/Watering" exact>
        <Watering/>
    </Route>
    <Route path="/Fertilising" exact>
        <Fertilise/>
    </Route>
    </Switch>
    </main>
   
    </Router>
    </FadeIn>;
}
export default App;
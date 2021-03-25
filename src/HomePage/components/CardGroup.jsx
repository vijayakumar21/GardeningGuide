import React from 'react';
import { Card,Grid,Typography ,makeStyles} from '@material-ui/core';
import HomeCard from './HomeCard'
import './CardGroup.css';
import CardImage1 from '../images/fertilise.png';
import CardImage2 from '../images/water.png';
import CardImage3 from '../images/humidity.png';
import CardImage4 from '../images/temperature.png';

function  CardGroup (props)
{
    return<div class="cards">
    <Grid container spacing={3}><HomeCard  imageName={CardImage1} color="#2A744D" type="fertilising" title="Last fertilised on" val="March 10 2021" />
    <HomeCard  imageName={CardImage2} key={2} color="#356386" type="watering" title="Last Watered on" val="March 21 2021" />
    <HomeCard  imageName={CardImage3} key={3} color="#333F8A" type="humidity" title="Humidity" val="78%" />
    <HomeCard imageName={CardImage4} key={4}  color="#833922" type="temperature" title="Temperature" val="30.5 °c" />
    </Grid></div> ;
}

export default  CardGroup;
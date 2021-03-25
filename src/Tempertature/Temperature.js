import React from 'react';
import './Temperature.css';
import FadeIn from 'react-fade-in';
import {Typography }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BarGraph from '../Graphs/BarGraph';


const useStyles = makeStyles((theme) => ({

  
    typography: {
          align: "center",
          textDecoration: "none",
          fontFamily:"Open Sans",
          marginTop:"1.5rem",
          marginBottom:"3rem",
          textAlign: "center",
          color:"#484649"
        },
        "@media ( max-width:960px)":{
          typography:{
            marginBottom:"3rem",
            marginTop:"1.7rem"
          }
        }
  
  }));

  
const Temperature=(props)=>{
    const classes=useStyles();
    return <FadeIn> 
    <div className="temperatureContainer"> <Typography variant="h5" className={classes.typography}>Temperature Readings </Typography>
    <BarGraph title="temperature" start={0.7} data={ [28.5,32.5,31.2,29.5,30.9,30.7,31]} labels={['Mar 18','Mar 19','Mar 20','Mar 21','Mar 22','Mar 23','Mar 24']}
    /> 
    <Typography variant="h6" className={classes.typography}>Average: 30.95 °c</Typography>
    </div>
    </FadeIn> ;
};
export default Temperature;
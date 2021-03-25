import React from 'react';
import {Typography} from '@material-ui/core'
import FadeIn from 'react-fade-in';
import BarGraph from '../Graphs/BarGraph';
import './Humidity.css';
import { makeStyles } from '@material-ui/core/styles';


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

const Humidity=(props)=>{
  const classes=useStyles();
    return( 
   <FadeIn>
      <div className="humidityContainer"> 
      <Typography variant="h5" className={classes.typography}> Humidity Readings </Typography>
      <BarGraph title="humidity" start={1.5} data={ [76,72.5,65.7,77,78,82.5,79]} labels={['Mar 18','Mar 19','Mar 20','Mar 21','Mar 22','Mar 23','Mar 24']}/> 
      <Typography variant="h6" className={classes.typography}>Average: 75.64%</Typography>
      </div>
      </FadeIn>
    );
};
export default Humidity;
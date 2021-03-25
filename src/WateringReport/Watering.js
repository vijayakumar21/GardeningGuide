import React from 'react';
import FadeIn from 'react-fade-in';
import {Typography} from '@material-ui/core'
import './Watering.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BarGraph from '../Graphs/BarGraph';
import TextBox from '../CommonComponents/TextBox.jsx';



const useStyles = makeStyles((theme) => ({

  
    typography: {
          align: "center",
          textDecoration: "none",
          fontFamily:"Open Sans",
          marginTop:"1.4rem",
          marginBottom:"2rem",
          textAlign: "center",
          color:"#484649"
        },
        "@media ( max-width:960px)":{
          typography:{
            marginBottom:"2.5rem",
            marginTop:"1.7rem"
          }
        },
        TextField:{
            textAlign:"center"
        }
  
  }));

const Watering=(props)=>{
     const classes=useStyles();
    return (
    <FadeIn>
       <div className="temperatureContainer"> 
       <Typography variant="h5" className={classes.typography}>Watering Report </Typography>
       <BarGraph title="watering" start={0.24} data={ [9.9,12,8.5,10.5,6,9,13]} labels={['Mar 18','Mar 19','Mar 20','Mar 21','Mar 22','Mar 23','Mar 24']}/> 
       <TextBox fullWidth={false}  title="Watering threshold"/>
    </div>
    </FadeIn>) ;
};
export default Watering;
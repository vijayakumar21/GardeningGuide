import React from 'react'
import {Switch,FormGroup,FormControlLabel,makeStyles,withStyles} from '@material-ui/core';
import './SwitchGroup.css';
import {blue,green,grey} from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
 
  label:{
      textAlign: 'center',
      margin:"0.55rem 0rem",
      fontFamily:"Open Sans",
  },
  switch:{
    marginRight:'0rem'
  },
 
  
  
}));

const WaterSwitch = withStyles((theme) => ({
  switchBase: {
    color: grey[200],
    '&$checked': {
      color: blue[300],
    },
    '&$checked + $track': {
      backgroundColor: blue[300],
    }
  },
  checked: {},
  track: {},
}))(Switch);

const FertiliseSwitch = withStyles((theme) => ({
  switchBase: {
    color: grey[200],
    '&$checked': {
      color: green[400],
    },
    '&$checked + $track': {
      backgroundColor: green[300],
    }
  },
  checked: {},
  track: {},
}))(Switch);


var SwitchGroup=(props)=>{
    const [checkedWater, setCheckedWater] = React.useState(false);
    const [checkedFertilise, setCheckedFertilise] = React.useState(false);
    const classes=useStyles();
  const toggleCheckedWater = () => {
    setCheckedWater((prev) => !prev);
  };
  const toggleCheckedFertilise = () => {
    setCheckedFertilise((prev) => !prev);
  };

  return (
   <div className="switchGroup">
    <FormGroup row>
      <FormControlLabel classes={{label: classes.label,switch:classes.switch}}
        control={ <WaterSwitch checked={checkedWater} onChange={toggleCheckedWater} /> }
        label="Automatic Watering"
        labelPlacement="start"
        
      />
     
      <FormControlLabel className={classes.Typography} classes={{label: classes.label}}
        control={<FertiliseSwitch  checked={checkedFertilise} onChange={toggleCheckedFertilise} />}
        label="Automatic Fertilising"
        labelPlacement="start"
        
      />
     
    </FormGroup>
    </div>

  );
};
export default SwitchGroup;
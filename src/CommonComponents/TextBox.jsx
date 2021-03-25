import React from 'react';
import {TextField,Button,makeStyles, withStyles,Snackbar} from '@material-ui/core';
import {useState} from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {green }from '@material-ui/core/colors';
import './TextBox.css'
const useStyles=makeStyles((theme)=>({
    button:{
        borderRadius:Number.MAX_VALUE,
        margin: "0.5rem 1rem",
        fontFamily:"Nunito"
    },
    fontChange:{
        fontFamily:'Nunito'
    }

}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[300]),
      fontWeight:600,
      backgroundColor: "#9FE6BF",
      '&:hover': {
        backgroundColor:"#86D9AB",
        
      },
      
    },
  }))(Button); 

const TextBox =(props)=>{
  const [state, setState] = React.useState(false);
  
  const handleClose = () => {
    setState(false);
  };

  const [errorState, setErrorState] = React.useState(false);
  const handleErrorClose = () => {
    setErrorState(false);
  };

    const classes=useStyles();
    const [value,setValue]=useState();
    const handleChange=(e)=>{
      if(isNaN(e.target.value)){
       setErrorState(true);
      }
      else
        setValue(e.target.value);
    };
    const [finalValue,setFinalValue]=useState();

    const handleClick=(event)=>{
      
      if(value!=undefined && value>=0 && value<=100)
      {
      setFinalValue(value)
      setState( true)
      }
      else
      {
        setErrorState(true);
      }
    };
    return( 
    <div className="btn-txt">
        <TextField inputStyle={useStyles.fontChange} id="filled-size-small" label="Threshold" value={value} variant="filled" onChange={handleChange} placeholder={props.title} />
        < ColorButton  className={classes.button} variant="contained" onClick={handleClick}>Set</ColorButton>
        <Snackbar
        anchorOrigin={ {vertical: 'bottom', horizontal: 'center'}}
        open={state}
        autoHideDuration={2000}
        onClose={handleClose}
        key={props.title}
        style={{marginBottom:"2rem"}}
        >
          <Alert>{`Updated ${props.title}`} </Alert>
        </Snackbar>

        <Snackbar
        anchorOrigin={ {vertical: 'bottom', horizontal: 'center'}}
        open={errorState}
        autoHideDuration={2000}
        onClose={handleErrorClose}
        style={{marginBottom:"2rem"}}
        >
          <Alert severity="error" > Enter a proper numeric value in 0 to 100 range </Alert>
        </Snackbar>

    </div> 
        );

}
export default TextBox;
import React from 'react';
import { Card,CardActionArea,Grid,Typography ,makeStyles} from '@material-ui/core';
import './HomeCard.css';
import { Link } from 'react-router-dom';
function HomeCard(props)
{
    var bgColor="";
    var type=props.type;
    if(type==='fertilising')
        bgColor='#C6F99D';
    else if(type==='watering')
        bgColor='#B4E9F4';
    else  if(type==="humidity")
        bgColor='#A9BCFF';
    else if(type==="temperature")
        bgColor="#FDBBB6";
    
    const useStyles = makeStyles((theme) => ({
        card:{
            backgroundColor:bgColor,
        },
        TypographyTitle:{
            textAlign: 'center',
            margin:"1rem 0 ",
            fontFamily:"Open Sans",
            color:props.color,
            textDecoration:"none"
        },
        TypographyValue:{
            textAlign: 'center',
            margin:"1rem 0 ",
            fontFamily:"Open Sans",
            fontWeight:600,
            color:props.color
        }
        
    }));
    const classes=useStyles();
    return <Grid item xs={6}>
    <Link  style={{textDecoration:"none"}} to={`/${props.type.charAt(0).toUpperCase()+props.type.slice(1)}`}>
    <Card className={classes.card} raised={true}>
    <CardActionArea>
   
    <Typography className={`${classes.TypographyTitle} cardtext`}>{props.title}</Typography>
    <Typography  className={`${classes.TypographyValue} cardtext`}>{props.val}</Typography>
    <img src= {props.imageName}  className="right" style={{ width:75, heigth:50,objectFit: "fill"}}></img>
    </CardActionArea>
    </Card>
    </Link>
    </Grid>
   ;
}
export default HomeCard;


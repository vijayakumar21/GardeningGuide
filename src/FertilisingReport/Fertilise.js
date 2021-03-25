import React from 'react';
import FadeIn from 'react-fade-in';
import './Fertilise.css';
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BarGraph from '../Graphs/BarGraph';
import TextBox from '../CommonComponents/TextBox.jsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



  
  function createData(date, day) {
    return { date,day };
  }
  
  const rows = [
    createData('20/02/2021', "Saturday"),
    createData('25/02/2021',"Thursday"),
    createData('4/03/2021', "Thursday"),
    createData('10/03/2021', "Wednesday"),
    createData('15/03/2021',"Monday"),
    createData('20/03/2021', "Saturday"),
    createData('25/03/2021', "Thursday"),
    
  ];

  
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
            marginBottom:"1.5rem",
            marginTop:"1.5rem"
          },
          TableContainer:{
            marginTop:"0",
            marginBottom:"0"
        }
        },
        TextField:{
            textAlign:"center"
        },
        table: {
            minWidth: 150,
            
          },
        "@media ( min-width:961px)":{
            TableContainer:{
                marginTop:"2rem",
                marginBottom:"2rem"
            }
          },
          TableCell:{
              fontFamily:'Nunito',
              fontWeight:"bold",
          },
          TableCell2:{
            fontFamily:'Open Sans',
        }
        
  }));

const Fertilise=(props)=>{
    const classes=useStyles();
    return (
    <FadeIn>
        <Typography variant="h5" className={classes.typography}>Fertilising Report</Typography>
        <div class="fertiliseContainer">
         <TableContainer className={classes.TableContainer}  component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.TableCell} >Fertilized Date</TableCell>
            <TableCell className={classes.TableCell} align="right">Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell  className={classes.TableCell2} align="right">{row.day}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        <Table>

        </Table>
        <TextBox fullWidth={false}  title="Days threshold"/>
        </div>
    </FadeIn>);
};
export default Fertilise;
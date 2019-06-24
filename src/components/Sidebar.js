import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedSelects from '../common/select';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import MaterialUIPickers from '../common/datepicker'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(
    createStyles({
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      pos: {
        marginBottom: 12,
      },
      titleSmall:{
        fontSize: 16,
        marginTop: 10
      },
      gridFullWith:{
        width: '100%',
      }
    }),
  );
  
  export default function Sidebar() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p" className={classes.title} gutterBottom>
           <ChevronRightIcon style={{verticalAlign:'middle'}} /> All Filters
          </Typography>
          <Divider />
          <Typography component="div" className={classes.titleSmall}>
            Basic Filters       
          </Typography>
          <Divider /> 
          <Grid container spacing={1}>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={12}><CustomizedSelects/></Grid>
          </Grid>
          <Typography component="div" className={classes.titleSmall}>
            Date Filters       
          </Typography>
          <Divider /> 
          <Grid container spacing={0}>
            <Grid item xs={12} ><MaterialUIPickers label="Submit Date" className={classes.gridFullWith} /></Grid>
            <Grid item xs={12} ><MaterialUIPickers label="End Date" className={classes.gridFullWith} /></Grid>
          </Grid>
          <Typography component="div" className={classes.titleSmall}>
            Advance Filters       
          </Typography>
          <Divider /> 
          <Grid container spacing={1}>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={6}><CustomizedSelects/></Grid>
            <Grid item xs={12} style={{margin:'auto'}}><CustomizedSelects/></Grid>
          </Grid>
        </CardContent>
        <CardActions>
            <Button variant="contained" color="primary" className={classes.button}>
                 Submit
            </Button>
            <Button className={classes.button}>Cancel</Button>
        </CardActions>
      </Card>
    );
  }
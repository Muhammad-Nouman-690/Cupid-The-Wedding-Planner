import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }));

function Form() {

    const classes = useStyles();
  
   

    return(
        <form className={classes.root} >
        <FormControl>
          <InputLabel htmlFor="component-simple">Set Your Location</InputLabel>
          <Input id="component-simple"   />
        </FormControl>
      
        <TextField
        id="date"
        label="Your Wedding Date"
        type="date"
               
        InputLabelProps={{
          shrink: true,
        }}
       
        />
 
        <FormControl>
          <InputLabel htmlFor="component-simple">What Services You Want</InputLabel>
          <Input id="component-simple"   />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-simple">No of Guests</InputLabel>
          <Input id="component-simple"   />
        </FormControl>
      
        
      </form>
    )
}

export default Form;
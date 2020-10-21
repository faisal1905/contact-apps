import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
        backgroundColor: "#1aa0e8",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#1aa0e8",
    '&:hover': {
        backgroundColor: fade( theme.palette.common.white, 0.25 ),
        fontFamily: 'cursive',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    },
   button: {
       margin: theme.spacing( 1 ),
       alignContent: '',
       fontFamily: 'cursive',
       color: "#e9ebf0",
  },
} ) );

export default function FormDialog ()

{
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
                                     
      <Button onClick={handleClickOpen}  className={ classes.button }>
        Create New Contact
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add your new Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
                     To save your Friend and Save your friendship.
          </DialogContentText>    
                  <div className={classes.margin}>
                      <Grid container spacing={ 1 } alignItems="flex-end">      
                          <Grid item>         
                              <AccountCircle />
                          </Grid>
                          <Grid item>    
                              <TextField id="input-with-icon-grid" label="Name" />      
                          </Grid>    
                          <Grid item>         
                              <AccountCircle />
                          </Grid>
                          <Grid item>    
                              <TextField id="input-with-icon-grid" label="Last Name" />      
                          </Grid>   
                      </Grid>
                      <Grid container spacing={ 1 } alignItems="flex-end">      
                          <Grid item>         
                              <ContactPhoneIcon />
                          </Grid>
                          <Grid item>    
                              <TextField id="input-with-icon-grid" label="Phone" />      
                          </Grid>    
                      </Grid>
                                            <Grid container spacing={ 1 } alignItems="flex-end">      
                          <Grid item>         
                              <ContactPhoneIcon />
                          </Grid>
                          <Grid item>    
                              <TextField id="input-with-icon-grid" label="Email" />      
                          </Grid>
                           <Grid item>         
                              <ContactPhoneIcon />
                          </Grid>
                          <Grid item>    
                              <TextField id="input-with-icon-grid" label="City" />      
                          </Grid>    
                      </Grid>
                  </div>
              </DialogContent>
              <DialogActions>
                  <Button onClick={ handleClose } color="primary">
                      Cancel    
          </Button>
                  <Button onClick={ handleClose } color="primary">
                      Save
          </Button>
              </DialogActions>
          </Dialog>
      </div>  
    ); 
}


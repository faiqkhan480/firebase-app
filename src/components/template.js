import React, {Component} from 'react';
import firebase from 'firebase'
import { database } from '../config/firebase'
// Material ui
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = theme => ({
    appBar: {
        // backgroundColor: "#8fe743",
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container:{
        position: "fixed",
        top: "auto",
        bottom: 0,
        display: "flex",
        // padding: theme.spacing(1, 1),
    },
    margin: {
        margin: theme.spacing(1),
    },
});

class CustomizedInputs extends Component{

    addData() {
        const data = {
            username: "dcf",
            number: 23445
        };
        const ApptronRef = database.ref("Apptron/");
        ApptronRef.push(data).then(res => {
            console.log("sucess Create", res)
        });
        console.log("Inside of Function");
    }

    render(){
        const { classes } = this.props
        return (
            <React.Fragment>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Posts
                        </Typography>
                        <Button color="inherit">LogOut</Button>
                    </Toolbar>
                </AppBar    >
                <Container className={classes.container}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <OutlinedInput />
                    </FormControl>
                    <Button variant="contained" color="primary" className={classes.margin} onClick={this.addData.bind(this)}>
                        Primary
                    </Button>
                </Container>
            </React.Fragment>
        );
    }
}


export default withStyles(useStyles)(CustomizedInputs)
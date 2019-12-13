import React, { Component } from 'react'
import fire from '../config/firebase';
import {onLogin, onLogout} from "../Redux/actions/myactions";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logOut } from "../Redux/actions/myactions";
//Material Ui
import { withStyles } from '@material-ui/core/styles';
import { loginStyles } from '../components/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from "@material-ui/core/LinearProgress";
import firebase from "firebase";



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        // this.props.dispatch(onLogout());
        // console.log(getU, 'getUsers');
        var user = firebase.auth().currentUser;
        console.log(user, 'login-=-=-=-=-')
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     const { token, history } = this.props;
    //     this.props.dispatch(login(this.state, history));
    //     // history.push('/login')
    //     // localStorage.setItem('token', token);
    // }

    handleChange(event){
        this.setState({[event.target.name] :  event.target.value, })
    }

    login(e) {
        e.preventDefault();
        this.props.dispatch(onLogin(this.state));
        // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        //     // this.props.history.push('/user')
        // }).catch((error) => {
        //     console.log(error);
        // });
    }

    render() {
        const { classes,  loading } = this.props;
        return (
            <React.Fragment>
                {/*{loading ? <div className={classes.progress}>*/}
                {/*    <LinearProgress color="secondary" />*/}
                {/*</div>:*/}
                <>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                My App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} onSubmit={this.login.bind(this)}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <NavLink to="/sign_up">Don't have an account? Sign Up</NavLink>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        loading: state.loading
    }
};

export default connect(mapStateToProps)(withStyles(loginStyles)(Login))
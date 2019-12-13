import React, { Component } from 'react'
import fire, {database, db} from '../config/firebase';
import { addUser, getUsers } from "../Redux/actions/myactions";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//MaterialUI items
import { signupStyles } from '../components/styles'
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';



class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: '',
            address: '',
            email: '',
            password: '',
        }
    }

    // componentDidMount() {
    //     this.props.dispatch(getUsers());
    //     console.log(this.props, 'singuppp')
    // }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push('/');
        this.setState({name :  '', email: '', password: '', })
    }

    handleChange(event){
        this.setState({[event.target.name] :  event.target.value, })
    }

    signup(e){
        const { name, phone, address, email, password } = this.state;
        e.preventDefault();
        console.log(this.state, 'state-=-=-=-=-')
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res)=>{
                const uid = res.user.uid;
                database.ref('/Users/' + uid).set({
                    Name: name,
                    Phone: phone,
                    Email: email,
                    Address: address
                }, (err) => {
                    if(err) {console.log(err, 'err in Set values in Users')}
                    this.props.history.push('/login')
                })
        }).catch((error) => {
                console.log(error, 'error==-=-');
            })
    }

    render() {
        const { data, classes } = this.props;
        const { name, phone, address, email, password } = this.state;
        return (
            <React.Fragment>
                {/*App Bar*/}
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Sign-Up
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
                            Sign up
                        </Typography>
                        <form className={classes.form} onSubmit={this.signup.bind(this)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="name"
                                        name="name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="name"
                                        autoFocus
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Ph Number"
                                        name="phone"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <NavLink to="/login">Already have an account? Sign in</NavLink>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

export default connect(mapStateToProps)(withStyles(signupStyles)(Signup))

// <Container component="main" maxWidth="xs">
//     <Box fontFamily="Dosis" fontSize={30} component="h4">
//     <NavLink to="/" className={classes.link} >My App</NavLink>
// </Box>
// <CssBaseline />
// <Box fontFamily="Dosis" fontSize={30} className={classes.paper} color='45af47'>
// <CardActionArea>
// <CardMedia
// className={classes.media}
// image="https://previews.123rf.com/images/seregam/seregam1201/seregam120101079/12111878-ink-pen-on-notebook-on-green-background.jpg"
// title="Contemplative Reptile"
// />
// </CardActionArea>
// Sign Up
// <form className={classes.form} style={{fontFamily: 'Dosis'}} onSubmit={this.signup.bind(this)} >
// {/*<TextField*/}
// {/*    margin="normal"*/}
// {/*    // required*/}
// {/*    fullWidth*/}
// {/*    id="name"*/}
// {/*    label="Name"*/}
// {/*    name="name"*/}
// {/*    value={name}*/}
// {/*    autoComplete="name"*/}
// {/*    // autoFocus*/}
// {/*    className={classes.textField}*/}
// {/*    onChange={this.handleChange.bind(this)}*/}
// {/*/>*/}
// <TextField
// // variant="outlined"
// margin="normal"
// // required
// fullWidth
// id="email"
// label="Email"
// name="email"
// value={email}
// autoComplete="email"
// // autoFocus
// className={classes.textField}
// onChange={this.handleChange.bind(this)}
// />
// <TextField
// // variant="outlined"
// margin="normal"
// // required
// fullWidth
// name="password"
// value={password}
// label="Password"
// type="password"
// id="password"
// autoComplete="current-password"
// className={classes.textField}
// onChange={this.handleChange.bind(this)}
// />
// <Button
// type="submit"
// // fullWidth
// // variant="contained"
// // color="primary"
// size='large'
// className={classes.submit}
// style={{outline: 'none'}}
// >
// Submit
// </Button>
// </form>
// </Box>
// </Container>
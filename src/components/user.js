import React, {Component} from 'react'
import fire, {cloudStore, database} from '../config/firebase'
import firebase from 'firebase'
import { connect } from 'react-redux';
import { getData, onLogout, onDelete } from "../Redux/actions/myactions";
import { NavLink } from 'react-router-dom'
// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import { userStyles } from '../components/styles';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from '@material-ui/core/Paper';
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from "@material-ui/core/CssBaseline";
import CloseIcon from '@material-ui/icons/Close';
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: '',
            index: null,
        };
    }

    componentDidMount() {
        this.props.dispatch(getData());
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    addData(event) {
        event.preventDefault();
        const { newPost } = this.state;

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user, 'usser=-=-=-=-=-=')
            // if (user) {
            //     // User is signed in.
            //     const uid = user.uid;
            //     console.log(newPost, 'user auth=-=-=--=')
            //     database.ref('/Post/' + uid).push({post: newPost})
            //         .then((ref) => {
            //             if(ref){
            //                 this.setState({newPost: ''});
            //             }
            //         })
            // } else {
            //     // No user is signed in.
            // }
        });
    }

    addUsers() {
        // const posts = db.collection("users");
        // posts.add({
        //     first: "Alan",
        //     middle: "Mathison",
        //     last: "Turing",
        //     born: 1912
        // }).then((docRef) => {
        //     console.log("add data to firestore Collection ", docRef.id);
        // })
        //     .catch((error) => {
        //         console.log("error messasge", error)
        //     })

        // Add a new document in collection "cities"
        const data = {
            name: "Asad",
            post: "Paper can be used to build surface or other elements for your application.",
            dateExample: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const posts = cloudStore.collection("posts");
        posts.doc("AS").set(data)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    deletePost(key) {
        this.props.dispatch(onDelete(key));
    }

    logout() {
        this.props.dispatch(onLogout());
        // fire.auth().signOut()
        // this.props.history.push('/login')
    }

    render() {
        const { classes, post, loading } = this.props;
        const { newPost } = this.state;
        return(
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Posts
                        </Typography>
                        <Button size="small" color="secondary" className={classes.button} onClick={this.logout.bind(this)}>
                            Log Out
                        </Button>
                    </Toolbar>
                </AppBar>
                {loading ? <div className={classes.progress}>
                        <LinearProgress color="secondary" />
                </div>:
                    <Container className={classes.container}>
                        {post.map((i, index) => {
                            return(
                                <Paper key={index} className={classes.root}>
                                    <Box className={classes.flexBox}>
                                        <IconButton size="small" onClick={this.deletePost.bind(this, i.key)}>
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="h5" component="h3" value={i.key}>
                                            {i.post}
                                        </Typography>
                                    </Box>
                                    <Typography component="p">
                                        Paper can be used to build surface or other elements for your application.
                                    </Typography>
                                </Paper>
                            )
                        })}
                    </Container>}
                <AppBar position="fixed" color="default" className={classes.appBar}>
                    <Toolbar>
                        <form required className={classes.form} onSubmit={this.addData.bind(this)}>
                            <TextField
                                required
                                label="Write Post"
                                fullWidth
                                variant="outlined"
                                name="newPost"
                                value={newPost}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Button variant="contained" color="primary" className={classes.margin} type="submit">
                                Add Post
                            </Button>
                        </form>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({post, loading}) => {
    return {
        post: post,
        loading: loading
    }
};

export default connect(mapStateToProps)(withStyles(userStyles)(User))
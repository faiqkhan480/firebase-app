import React, {Component} from 'react'
import { getUser, onLogout } from "../Redux/actions/myactions";
import {connect} from "react-redux";
import AppBar  from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { appBar } from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";


class Appbar extends Component {
    componentDidMount() {
        this.props.dispatch(getUser());
    }

    logout() {
        this.props.dispatch(onLogout());
        // fire.auth().signOut()
        // this.props.history.push('/login')
    }

    render() {
        const {classes, user} = this.props
        return(
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {user ? user : 'Posts'}
                    </Typography>
                    <Button size="small" color="secondary" className={classes.button} onClick={this.logout.bind(this)}>
                        Log Out
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        user: user,
    }
};

export default connect(mapStateToProps)(withStyles(appBar)(Appbar))
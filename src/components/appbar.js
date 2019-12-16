import React, {Component} from 'react'
import { getUser, onLogout } from "../Redux/actions/myactions";
import {connect} from "react-redux";
import AppBar  from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import { appBar } from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";


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
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
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
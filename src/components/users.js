import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Box, Container, CssBaseline, List, ListItem, ListItemIcon } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import withStyles from "@material-ui/core/styles/withStyles";
import { usersStyles } from '../components/styles'
import {getUsers} from "../Redux/actions/myactions";
import { NavLink } from 'react-router-dom'



class Users extends Component {

    componentDidMount() {
        this.props.dispatch(getUsers());
        console.log(this.props, 'getUsers');
    }

    render() {
        const { classes , users} = this.props;
        // console.log(this.props, 'props')
        return(
            <Container component="main" maxWidth="xs">
                <Box fontFamily="Dosis" fontSize={30} component="h4">
                    <NavLink to="/" className={classes.link} >My App</NavLink>
                </Box>
                <CssBaseline />
                <Box fontFamily="Dosis" fontSize={30} className={classes.paper} color='45af47'>
                <h5>User Page</h5>
                <List>
                    {users.map((item, index) => {
                        console.log(item, 'item')
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                {item.name}
                            </ListItem>
                        )
                    })}
                </List>
                </Box>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.data
    }
};

export default connect(mapStateToProps)(withStyles(usersStyles)(Users))
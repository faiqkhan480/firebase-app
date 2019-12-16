import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import firewatch from '../statics/164290803-firewatch-wallpapers.jpg'
// Material UI Items...
import { withStyles } from '@material-ui/core/styles';
import { homeStyles } from '../components/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class Home extends Component {



    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Container maxWidth="sm" className={classes.container}>
                    <Typography variant="h2" className={classes}> Welcome to App...</Typography>
                    <Button component={NavLink} to="/login" variant="contained" size="large" className={classes.button}>Get Started</Button>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
};

export default connect(mapStateToProps)(withStyles(homeStyles)(Home))
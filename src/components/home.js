import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import firewatch from '../statics/164290803-firewatch-wallpapers.jpg'
// Material UI Items...
import { withStyles } from '@material-ui/core/styles';
import { homeStyles } from '../components/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

class Home extends Component {

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                {/*app bar*/}
                {/*        <NavLink className={classes.button} to="/sign_up">Sign up</NavLink>*/}
                {/*card item*/}
                <Container>
                    <Grid container justify="center" spacing={3}>
                        <Grid item xs={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={firewatch}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            User
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <NavLink style={{textDecoration: "none"}} to="/login">
                                        <Button size="small" color="primary">
                                            LogIn
                                        </Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
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
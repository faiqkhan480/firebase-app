import React, {Component} from 'react'
import { Container } from '@material-ui/core'
import NotInterestedIcon from '@material-ui/icons/NotInterested';

class Notfound extends Component {
    render() {
        return(
            <Container>
                <NotInterestedIcon />
                <h1>Not found</h1>
            </Container>
        )
    }
}
export default Notfound
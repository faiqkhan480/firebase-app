import axios from 'axios';
import fire, {database} from "../../config/firebase";
import firebase from 'firebase'

// Firebase Actions----
export const getData = () => dispatch => {
    firebase.auth().onAuthStateChanged(user => {
        // User is signed in.
        if (user) {
            const uid = user.uid;
            database.ref('/Post/' + uid)
            .on("child_added", (snapshot) => {
                dispatch({
                    type: 'GET_DATA',
                    payload: { key: snapshot.key, post: snapshot.val().post},
                    // key: snapshot.key,
                });
            })
        } else {
            // No user is signed in.
            // this.props.history.push('/login');
        }
    })
};

export const onCreate = () => dispatch => {

}

export const onLogin = (state) => dispatch => {
    fire.auth().signInWithEmailAndPassword(state.email, state.password)
        .then((user)=>{
           dispatch({
               type: 'LOGIN',
               payload: user.uid
           })
    }).catch((error) => {
        console.log(error, '=-=-=-=-error');
    });
};

export const onLogout = () => dispatch => {
        fire.auth().signOut()
        dispatch({
            type: 'LOGOUT'
        })
};

export const onDelete = (key) => dispatch => {
    const uid = fire.auth().currentUser.uid;
    database.ref('/Post/' + uid + '/' + key).remove((err) => {
        if(!err) {
            dispatch({
                type: 'DELETE',
                payload: key,
            })
        } else {
            console.log(err, 'error on delete post')
        }
    })
};
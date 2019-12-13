import { createStore } from "redux";
import myReducer from "./Redux/reducers/myreducers";

function configureStore(state = {rotating: true}) {
    return createStore(myReducer, state)
}

export default configureStore;
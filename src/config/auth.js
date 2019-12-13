import React, { useEffect, useState, Component } from "react";
import fire from "./firebase";

export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//
//     useEffect(() => {
//         console.log(setCurrentUser, 'setCurrentUser=-=-=-')
//         fire.auth().onAuthStateChanged(setCurrentUser);
//         console.log(currentUser, 'currentUser=-=-=-')
//     }, []);
//
//     return (
//         <AuthContext.Provider
//             value={{
//                 currentUser
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };

class AuthProvider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: ''
        }
    }

    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            this.setState({currentUser: user})
        });
    }

    render() {
        const {currentUser} = this.state
        return(
            <AuthContext.Provider
                value={{
                    currentUser
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider
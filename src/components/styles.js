// App Component
export const appStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: "white",
            height: "100vh",
            overflow: "hidden"
            // backgroundColor: "#8fe743",
        },
    },
});

// Appbar Component
export const appBar = theme => ({
    appBar: {
        flexGrow: 1,
        background: 'white',
        boxShadow: 'none',
    },
    toolBar: {
        color: "black",
        display: "flex",
        justifyContent: "space-between",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

// Home Component
export const homeStyles = theme => ({
    root: {
        // backgroundColor: "#41e7e4",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    container: {
        // backgroundColor: "#e7335a",
        // width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        borderRadius: 26,
        marginTop: theme.spacing(8),
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(62,62,66,1) 79%)",
        color: "white",
    }
});

// Sign-up Component
export const signupStyles = theme => ({
    appBar: {
        // backgroundColor: "#8fe743",
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'blue'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

// Login Component
export const loginStyles = theme => ({
    appBar: {
        // backgroundColor: "#8fe743",
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    progress: {
        width: '100%',
        // '& > * + *': {
        //     marginTop: theme.spacing(2),
        // },
    },
});

// User Component
export const userStyles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    container:{
        // paddingBottom: 70,
        padding: theme.spacing(9, 2),
    },
    root: {
        // flexGrow: 1,
        padding: theme.spacing(3, 2),
        marginBottom: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    margin: {
        marginLeft: theme.spacing(1),
        // height: "55px",
        padding: theme.spacing(0, 2)
    },
    progress: {
        width: '100%',
        marginTop: 44,
    },
    form: {
      width: "100%",
      display: "flex",
    },
    flexBox: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
});

// Users Component
export const usersStyles = theme => ({
    paper: {
        backgroundColor: '#ffffff',
        // backgroundImage: 'linear-gradient(147deg, #f71735 0%, #db3445 74%)',
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // borderRadius: 24,
        // color: "white",
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
});
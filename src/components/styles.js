// App Component
export const appStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: "white",
            // backgroundColor: "#8fe743",
        },
    },
});

// Appbar Component
export const appBar = theme => ({
    title: {
        flexGrow: 1,
    },
    button: {
        // background: 'linear-gradient(315deg, #84fb95 0%, #cef576 74%)',
        border: 'borderLeft',
        borderRadius: 22,
        color: 'white',
        height: 40,
        // margin: theme.spacing(3, 0, 2),
        padding: '0 30px',
    },
});

// Home Component
export const homeStyles = theme => ({
    // paper: {
    //     backgroundColor: 'white',
    //     // backgroundImage: 'linear-gradient(147deg, #f71735 0%, #db3445 74%)',
    //     marginTop: theme.spacing(8),
    //     padding: theme.spacing(2),
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     // borderRadius: 24,
    //     // color: "white",
    //     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    //
    // },
    // media: {
    //     height: 170,
    // },
    // button: {
    //     background: 'linear-gradient(315deg, #84fb95 0%, #cef576 74%)',
    //     border: 'borderLeft',
    //     borderRadius: 22,
    //     color: 'white',
    //     height: 40,
    //     margin: theme.spacing(3, 2, 2),
    //     padding: '0 30px',
    // },
    // link: {
    //     textDecoration: 'none',
    //     color: 'white'
    // },
    root: {
        flexGrow: 1,
        // overflow: "hidden"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        color: 'white',
        textDecoration: "none",
        borderRadius: 25,
    },
    paper: {
        height: 140,
        width: 100,
    },
    girdChild: {
        marginTop: theme.spacing(0),
        // margin: theme.spacing(0),
        // width: 0,
    },
    card: {
        maxWidth: 345,
    },
    buttonGrid: {
        marginTop: theme.spacing(2),
    },
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
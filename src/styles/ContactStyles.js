import Background from '../images/meijiShrine.jpg';
export const styles = {
    root: {
        width: "100%",
        height: "98%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "100vw 120vh",
        backgroundRepeat: "no-repeat",
        overflow: "scroll"
    },
    all:{
        width: "100vw",
        height: "100vh"
    },
    bg: {
        backgroundColor: "rgba(255,255,255,0.85)"
    },
    title:{
        fontFamily: "'Rock Salt', cursive",
        fontSize: "2rem",
        marginBottom: 0
    },
    form: {
        width: "100%",
        height: "75%",
        textAlign: "center"
    },
    formDiv: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    formControl: {
        width: "50%",
        marginTop: "2.5rem"
    },
    message: {
        width: "50%",
        marginTop: "3rem",
        marginBottom: "2.5rem"
    },
    label: {
        fontSize: "1.25rem"
    },
    button: {
        marginBottom: "2rem",
        "&:hover": {
            boxShadow: "2px 2px 2px #9b9ea3"
        }
    },
    iconDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "3rem"
    },
    icon: {
        color: "white",
        fontSize: "2.5rem",
        marginLeft: "1rem"
    }
   
   
};

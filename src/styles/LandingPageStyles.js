import Background from '../images/landingPageImage.jpg';
export const styles = {
    root: {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
    },
    top: {
        display: "flex",
        justifyContent: "flex-end",
        height: "10%"
    },
    button: {
        marginRight: "2rem",
        color: "#d1cbcb",
        " &:hover ": {
            color: "#c9c1c1",
            textShadow: "0.3px 0.3px #d4d2d2",
            textDecoration: "underline"
        }
    },
    titleBtn: {
        marginRight: "1250px",
        color: "#d1cbcb",
        fontFamily: `Cinzel, serif`,
        fontSize: "1.3rem"
    }
   
};


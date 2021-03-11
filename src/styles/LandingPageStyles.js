import Background from '../images/landingPageImage.jpg';
import sizes from './sizes';
export const styles = {
    all: {
        width: "100vw",
        height: "100vh"
    },
    root: {
        width: "100vw",
        height: "98vh",
        position: "relative",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "125vw 150vh"
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
    },
    grid: {
        marginTop: "10rem",
    },
    item: {
        marginRight: "15rem",
        marginBottom: 0,
        fontFamily: "'Permanent Marker', cursive",
        fontSize: "1.5rem !important",
        color: "#ccc2c2",
         [sizes.down("sp")]: {
             fontSize: "1.2rem"
         }
        
    },
    title: {
        fontSize: "3rem !important",
        [sizes.down("sp")]: {
            fontSize: "2.3rem !important"
        },
        [sizes.down("sm")]:{
            fontSize: "1.5rem !important"
        }
    } 
};


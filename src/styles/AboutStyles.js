import Background from '../images/palmTrees.jpg';
import sizes from './sizes';
export const styles = {
    root: {
        width: "100%",
        height: "98%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "100vw 190vh",
        backgroundRepeat: "no-repeat",
    },
    all:{
        width: "100vw",
        height: "100vh"
    },
    title: {
        marginLeft: "5rem",
        textDecoration: "underline ",
        fontSize: "3rem",
        fontFamily: "'Permanent Marker', cursive",
        letterSpacing: "0.3rem",
        [sizes.down("lg")]: {
            fontSize: "2.5rem"
        },
        [sizes.down("md")]: {
            fontSize: "2rem"
        },
        [sizes.down("sm")]: {
            fontSize: "1.5rem"
        },
        [sizes.down("xs")]: {
            fontSize: "1.25em"
        }
    },
    text: {
        marginLeft : "5rem",
        color: "black",
        textShadow: "2px 2px 2px #ccc2c2",
        fontSize: "1.5rem",
        fontFamily: "'Special Elite', cursive",
        lineHeight: "1.75rem",
        [sizes.down("lg")]: {
            fontSize: "1.4rem"
        },
        [sizes.down("md")]: {
            fontSize: "1.2rem"
        },
        [sizes.down("sm")]: {
            fontSize: "1rem"
        }

    },
    img: {
        height: "auto",
        marginTop: "2rem",
        marginLeft: "7rem",
        borderRadius: "4px",
        maxWidth : "50%",
        [sizes.down("pic")]: {
            display: "none"
        }
    }
    
   
};

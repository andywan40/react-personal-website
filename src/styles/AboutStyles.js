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
    container: {
        width: "70%",
        [sizes.down("lg")]: {
            width: "80%",
        },
        [sizes.down("md")]: {
            width: "90%",
        },
        [sizes.down("sm")]: {
            width: "95%",
        }
    },
    title: {
        marginLeft: "5rem",
        fontSize: "3rem",
        fontFamily: "'Cantarell', sans-serif",
        textTransform: "uppercase",
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
        textShadow: "1px 1px 1px #ccc2c2",
        fontSize: "1.2rem",
        fontFamily: "'Cinzel', serif",
        lineHeight: "1.85rem",
        [sizes.down("lg")]: {
            fontSize: "1.15rem"
        },
        [sizes.down("md")]: {
            fontSize: "1.05rem"
        },
        [sizes.down("sm")]: {
            fontSize: "1rem"
        }
    },
    link: {
        color: "#f58e07",
        textShadow: "1px 1px 1px #3e4475",
    }
};

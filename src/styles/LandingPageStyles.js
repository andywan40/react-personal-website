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
    grid: {
        marginTop: "10rem",
    },
    item: {
        marginRight: "15rem",
        marginBottom: "0",
        fontFamily: "'Cantarell', sans-serif",
        fontSize: "1.5rem !important",
        color: "#ccc2c2",
         [sizes.down("sp")]: {
             fontSize: "1.2rem"
         }
        
    },
    title: {
        marginTop: "0",
        marginBottom: "0",
        fontSize: "3rem !important",
        fontFamily: "'Cantarell', sans-serif",
        [sizes.down("sp")]: {
            fontSize: "2.3rem !important"
        },
        [sizes.down("sm")]:{
            fontSize: "1.5rem !important"
        }
    },
    desc: {
        marginTop: "0"
    }
};


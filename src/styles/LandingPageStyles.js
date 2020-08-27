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
        fontSize: "1.5rem",
        color: "#ccc2c2",
         [sizes.down("sp")]: {
             fontSize: "1.2rem"
         }
        
    }
    // desc1: {
    //     fontSize: "4rem",
    //     color: "#ccc2c2",
    //     fontFamily: "'Permanent Marker', cursive",
    //     [sizes.down("lgg")]: {
    //         fontSize: "2.6rem"
    //       },
    //       [sizes.down("mdd")]: {
    //         fontSize: "2.1rem"
    //       },
    //       [sizes.down("md")]: {
    //         fontSize: "1.8rem"
    //       },
    //     [sizes.down("smm")]: {
    //         fontSize: "1.7em"
    //       },
    //       [sizes.down("xss")]: {
    //         fontSize: "1.5em"
    //       },
    //     marginBottom: 0

    // },
    // desc2: {
    //     fontSize: "4rem",
    //     color: "#ccc2c2",
    //     fontFamily: "'Permanent Marker', cursive",
    //     [sizes.down("lgg")]: {
    //         fontSize: "3rem"
    //       },
    //       [sizes.down("mdd")]: {
    //         fontSize: "2.3rem"
    //       },
    //       [sizes.down("smm")]: {
    //         fontSize: "2rem"
    //       },
    //       [sizes.down("xss")]: {
    //         fontSize: "1.5em"
    //       },
    //     marginTop: 0,
    //     marginBottom: 0
    // },
    // desc3: {
    //     fontSize: "4rem",
    //     color: "#ccc2c2",
    //     fontFamily: "'Permanent Marker', cursive",
    //     [sizes.down("mdd")]: {
    //         fontSize: "2.8rem"
    //       },
    //       [sizes.down("smm")]: {
    //         fontSize: "1.8rem"
    //       },
    //       [sizes.down("xss")]: {
    //         fontSize: "1.5em"
    //       },
    //     marginTop: 0
    // },
    // gridContainer1: {
    //     marginTop: "2rem"
    // },
    // gridContainer2: {
    //     marginTop: 0,
    //     marginLeft: "5rem"
    // },
    // gridContainer3: {
    //     marginTop: 0,
    // },
    // gridItem1: {
    //     marginLeft: "8rem"
    // },
    // gridItem2: {
    //     marginRight:"10rem"
    // },
    // gridItem3: {
    //     marginLeft:"8rem"
    // }
   
};


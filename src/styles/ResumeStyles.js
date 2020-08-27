import Background from '../images/tokyoTower.jpg';
import sizes from './sizes';
export const styles = {
    root: {
        width: "100%",
        height: "98%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "130vw 140vh",
        backgroundRepeat: "no-repeat",
        overflow: "scroll"
    },
    all:{
        width: "100vw",
        height: "100vh"
    },
    container: {
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center"
    },
    grid: {
        display: "flex",
        justifyContent: 'space-around',
        marginTop: "1.5rem",
        marginBottom: "1.5rem"
        
    },
    card: {
        width: "90%",
        marginLeft: 0,
    },
    cardContent: {
        height: "100px"
    },
    media: {
        height: 200,
    },
    link: {
        textDecoration: "none",
        color: "rgb(63, 81, 181)"
    }
   
};

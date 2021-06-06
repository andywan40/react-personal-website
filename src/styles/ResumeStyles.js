import Background from '../images/tokyoTower.jpg';
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
        marginTop: "2rem",
        marginBottom: "2rem"
        
    },
    card: {
        width: "90%",
        marginLeft: 0,
        height: "75vh"
    },
    cardContent: {
        height: "50vh",
        overflow: "scroll",
    },
    cardTypo: {
        marginBottom: "5rem"
    },
    media: {
        height: "25vh",
    },
    link: {
        textDecoration: "none",
        color: "rgb(63, 81, 181)"
    }
   
};

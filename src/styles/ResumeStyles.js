import Background from '../images/tokyoTower.jpg';
export const styles = {
    root: {
        width: "100%",
        height: "98%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "130vw 140vh",
        backgroundRepeat: "no-repeat"
    },
    all:{
        width: "100vw",
        height: "100vh"
    },
    container: {
        marginTop: "3.5rem"
    },
    grid: {
        display: "flex",
        justifyContent: 'center',
        marginTop: "1.5rem"
        
    },
    card: {
        width: "75%",
        maxWidth: 425,
        marginLeft: "3rem"
    },
    media: {
        height: 200,
    },
    link: {
        textDecoration: "none",
        color: "rgb(63, 81, 181)"
    }
   
};

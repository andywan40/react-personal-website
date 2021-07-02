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
    }  
};

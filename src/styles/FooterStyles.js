export const styles = {
    root: {
        width: "100vw",
        height: "100%",
        backgroundColor: "black"
    },
    textArea: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& p":{
            color: 'white',
            fontSize: "0.8rem",
            marginTop: 0,
            marginBottom: 0,
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
            fontFamily: "'Cantarell', sans-serif",
            textTransform: "uppercase"
        }
    },
    link:{
        textDecoration: "none",
        color: "white",
        " &:hover ": {
            color: "#c9c1c1",
            textShadow: "0.3px 0.3px #d4d2d2",
            textDecoration: "underline"
        }
    }
};

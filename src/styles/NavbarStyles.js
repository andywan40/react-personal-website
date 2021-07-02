import sizes from './sizes';
export const styles = {
  top: {
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "1fr 3fr 3fr",
    [sizes.down("md")]: {
      gridTemplateColumns: "1fr 5fr 1fr",
    }
  },
  link:{
    textDecoration: "none",
    fontWeight: 500,
  },
  navlinkdiv: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    width: "100%",
    alignItems: "center",
  },
  navlink: {
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "'Cantarell', sans-serif",
    fontWeight: 600,
    color: "#ccc2c2",
    width: "50%",
    "&:hover": {
      color: "#c9c1c1",
      textShadow: "0.3px 0.3px #d4d2d2",
      textDecoration: "underline"
    },
    [sizes.down("md")]: {
      display: "none"
    }
  },
  hamburger: {
    display: "none",
    [sizes.down("md")]: {
      display: "block",
      color: "#ccc2c2"
    }
  },
};
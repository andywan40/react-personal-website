import sizes from './sizes';
export const styles = {
  top: {
    //   display: "flex",
    //   justifyContent: "flex-end",
      height: "10%",
    //   width: "100vw"
  },
  button: {
    //   marginRight: "2rem",
      color: "#bdb9b9",
      " &:hover ": {
          color: "#c9c1c1",
          textShadow: "0.3px 0.3px #d4d2d2",
          textDecoration: "underline"
      },
      [sizes.down("sm")]: {
        display: "none"
      }
  },
  titleBtn: {
    //   marginRight: "1250px",
      color: "#ccc2c2",
      fontFamily: `Cinzel, serif`,
      fontSize: "1.3rem",
      padding: 0,
    
  },
  link:{
      textDecoration: "none",
      color: "#ccc2c2",
      " &:hover ": {
        color: "#c9c1c1",
        textShadow: "0.3px 0.3px #d4d2d2",
        textDecoration: "underline"
    }
  },
  logo: {
    [sizes.down("xl")]: {
        width: "400px",
        
      },
      [sizes.down("md")]: {
        width: "300px",
      },
      [sizes.down("xs")]: {
        width: "250px",
      }
  },
  hamburger: {
      display: "none",
      [sizes.down("sm")]: {
        display: "block",
        color: "#ccc2c2 !important"
      }
  }
  
 
};
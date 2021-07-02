import Background from "../images/mountFuji5.jpg";
export const styles = {
  root: {
    width: "100%",
    height: "98%",
    backgroundImage: `url(${Background})`,
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    overflow: "scroll",
  },
  all: {
    width: "100vw",
    height: "100vh",
  },
  container: {
    marginTop: "2rem",
    justifyContent: "center"
  }
};

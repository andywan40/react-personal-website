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
  },
  grid: {
    display: "flex",
    justifyContent: 'space-around',
    marginTop: "2rem",
    marginBottom: "2rem"
  },
  content: {
    marginBottom: "4rem",
  },
  card: {
    width: "70%",
    marginLeft: 0,
    position: "relative",
  },
  cardActions: {
    position: "absolute",
    bottom: 0,
  },
  media: {
    height: 200,
  },
  link: {
    textDecoration: "none",
    color: "rgb(63, 81, 181)",
  },
};

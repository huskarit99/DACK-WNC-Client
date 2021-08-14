import { makeStyles } from "@material-ui/core/styles";

const colorAvatar = ["red", "green", "blue", "orange", "gray", "black"];

const useStyles = makeStyles(() => ({
  avatar: {
    width: "30px",
    height: "30px",
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: colorAvatar[Math.floor(Math.random() * 7)],
  },
  settingIcon: {
    width: "25px",
    height: "25px",
    color: "black",
  },
  typography: {
    fontSize: "0.875rem",
  },
  div1: {
    display: "inline-flex",
    width: "100%",
    height: "100%",
  },
  div2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
  },
  div3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  div4: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
  },
}));

export default useStyles;

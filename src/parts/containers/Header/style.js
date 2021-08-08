import { makeStyles } from "@material-ui/core/styles";

const colorAvatar = ["red", "green", "blue", "orange", "gray", "black"];

const useStyles = makeStyles(() => ({
  avatar: {
    width: "42px",
    height: "42px",
    fontSize: "16px",
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
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;

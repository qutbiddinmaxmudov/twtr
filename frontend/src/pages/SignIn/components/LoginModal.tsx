import { TextField, makeStyles, withStyles, Button } from "@material-ui/core";
import React from "react";
import ModalBlock from "../../../components/ModalBlock";

const CssTextField = withStyles({
  root: {
    marginBottom: 15,

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(196, 207, 214)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(196, 207, 214)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(29, 161, 242)",
      },
    },
  },
})(TextField);

const styles = makeStyles((theme) => ({
  loginButton: {
    marginBottom: 15,
    maxWidth: "100%",
    width: 320,
  },
}));
interface loginModalParams {
  closeFunc: () => void;
}
function LoginModal({ closeFunc }: loginModalParams) {
  const classes = styles();
  return (
    <ModalBlock title={"Войти в Твиттер"} closeFunc={closeFunc}>
      <CssTextField label="Логин" variant="outlined" />
      <CssTextField label="Пароль" variant="outlined" />
      <Button
        className={classes.loginButton}
        variant="contained"
        color="primary"
        fullWidth
      >
        Войти
      </Button>
    </ModalBlock>
  );
}

export default LoginModal;

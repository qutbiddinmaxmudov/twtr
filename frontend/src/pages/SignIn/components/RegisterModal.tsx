import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import React, { useState } from "react";
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
    marginLeft: "auto",
    marginTop: 30,
  },
  loginInfoTitle: {
    fontSize: 15,
    lineHeight: 1.25,
    color: "#0f1419",
    fontWeight: 700,
    marginBottom: 10,
  },
  loginInfoText: {
    fontSize: 15,
    lineHeight: 1.25,
    marginBottom: 30,
  },
}));
interface loginModalParams {
  closeFunc: () => void;
}

function LoginModal({ closeFunc }: loginModalParams) {
  const classes = styles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => setSelectedDate(date);

  return (
    <ModalBlock
      title={"Создайте учетную запись"}
      closeFunc={closeFunc}
      size="sm"
    >
      <CssTextField label="Имя" variant="outlined" />
      <CssTextField label="Почта" variant="outlined" />
      <Typography component="h4" className={classes.loginInfoTitle}>
        Дата рождения
      </Typography>
      <Typography className={classes.loginInfoText}>
        Эта информация не будет общедоступной. Подтвердите свой возраст, даже
        если эта учетная запись предназначена для компании, домашнего животного
        и т. д.
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          inputVariant="outlined"
          margin="normal"
          id="date-picker-dialog"
          label="День месяц год"
          format="dd/MM/yyyy"
          animateYearScrolling={true}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <Button
        className={classes.loginButton}
        variant="contained"
        color="primary"
        fullWidth
      >
        Далее
      </Button>
    </ModalBlock>
  );
}

export default LoginModal;

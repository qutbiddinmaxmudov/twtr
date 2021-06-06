import { Button, makeStyles, Typography } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import React, { useState } from "react";
import { Footer } from "../../components/Footer";

import leftSideImage from "../../images/leftside-background.png";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    display: "flex",
    flexGrow: 1,
  },
  leftSide: {
    width: "50%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${leftSideImage})`,
    backgroundColor: "rgb(29, 161, 242)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  rightSide: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px 30px",
  },
  twitterLeftLogo: {
    maxWidth: "100%",
    width: "40%",
    minHeight: "250px",
    objectFit: "contain",
    fill: "#fff",
  },
  title: {
    fontSize: "64px",
    color: "#0f1419",
    lineHeight: "84px",
    letterSpacing: "-1.2px",
    fontWeight: "bold",
    marginTop: "48px",
    marginBottom: "48px",
  },
  subtitle: {
    fontSize: "31px",
    color: "#0f1419",
    lineHeight: "36px",
    fontWeight: "bold",
    marginBottom: 30,
  },
  rightBlockTwitterIcon: {
    fontSize: 50,
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const [activeModal, setActiveModal] = useState<"SignUp" | "SignIn">();
  const openSignInModal = () => setActiveModal("SignIn");
  const openSignUpModal = () => setActiveModal("SignUp");
  const closeModal = (): void => setActiveModal(undefined);
  return (
    <div className={classes.wrapper}>
      {activeModal === "SignIn" && <LoginModal closeFunc={closeModal} />}
      {activeModal === "SignUp" && <RegisterModal closeFunc={closeModal} />}
      <div className={classes.content}>
        <section className={classes.leftSide}>
          <svg
            className={classes.twitterLeftLogo}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </section>
        <section className={classes.rightSide}>
          <Twitter color="primary" className={classes.rightBlockTwitterIcon} />
          <Typography component="h1" className={classes.title}>
            В курсе происходящего
          </Typography>
          <Typography component="h2" className={classes.subtitle}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Button
            onClick={openSignUpModal}
            style={{ marginBottom: 20, maxWidth: 380 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>

          <Button
            onClick={openSignInModal}
            style={{ maxWidth: 380 }}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Войти
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

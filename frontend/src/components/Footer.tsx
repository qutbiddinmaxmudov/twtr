import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  footerBar: {
    backgroundColor: "#fff",
    padding: "10px 15px",
    height: 50,
  },
  footerText: {
    color: "rgb(91, 112, 131)",
    textAlign: "center",
    fontSize: "20px",
  },
  footerLink: {
    color: "rgba(29,161,242,1.00)",
  },
}));

function Footer() {
  const classes = styles();
  return (
    <footer className={classes.footerBar}>
      <Typography className={classes.footerText}>
        Сайт разработан{" "}
        <a
          className={classes.footerLink}
          href="https://github.com/qutbiddinmaxmudov"
        >
          мной
        </a>{" "}
        в целях обучения.
      </Typography>
    </footer>
  );
}

export default Footer;

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface ModalBlockProps {
  title: string;
  children: React.ReactNode;
  closeFunc: () => void;
  size?: "lg" | "md" | "sm" | "xl" | "xs";
  big?: boolean;
}

const styles = makeStyles((theme) => ({
  modalBigger: {
    width: 600,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 700,
    paddingRight: 15,
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
  },
  modalTop: {
    "& h2": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));

function ModalBlock({
  title,
  children,
  size = "sm",
  closeFunc,
}: ModalBlockProps) {
  const classes = styles();
  return (
    <Dialog
      maxWidth={size}
      open={true}
      onClose={closeFunc}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" className={classes.modalTop}>
        <IconButton onClick={closeFunc} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        <Typography component="span" className={classes.modalTitle}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.modalContent}>{children}</DialogContent>
    </Dialog>
  );
}

export default ModalBlock;

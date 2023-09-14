import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { createUseStyles } from "react-jss";
import { mainTheme } from "../../../../colorThemes/colorBase";
import { useEffect } from "react";
import CPIForm from "./components/CPIForm";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "50px",
    borderRadius: "25px",
    border: "none",
    background: mainTheme.projectBlockColor,
    position: "fixed",
    zIndex: 5,
    right: 23,
    bottom: 70,
    transition: "1s",
    cursor: "pointer",
    "&:hover": {
      background: mainTheme.backgroundColor,
    },
  },

  someText: {
    fontSize: "17px",
    color: "white",
    fontWeight: 500,
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "52%",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function ChangeProjectInfo({ isOpen, project, setEdit }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit project info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Here you can edit your project information
          </Typography>
          <CPIForm project={project} setOpen={setOpen} setEdit={setEdit} />
        </Box>
      </Modal>
    </div>
  );
}

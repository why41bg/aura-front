import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Dailog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import noteService from "../../../services/noteService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});

const NoteDialog = ({ open, handleClose, note, onUpdate }) => {
  const textFieldRef = useRef(null);
  const handleSave = () => {
    const textFieldValue = textFieldRef.current.value;
    noteService.updateNoteContent(note.id, textFieldValue).then(() => {
      onUpdate(textFieldRef.current.value);
      handleClose();
    });
  };
  return (
    <React.Fragment>
      <Dailog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div">
              Note
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component={"form"}
          sx={{ width: "80%", maxWidth: "100%", margin: "auto" }}
          noValidate
          autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              fullWidth
              multiline
              rows={10}
              defaultValue={note.content}
              inputRef={textFieldRef}
            />
          </div>
        </Box>
      </Dailog>
    </React.Fragment>
  );
};

export default NoteDialog;

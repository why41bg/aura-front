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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";

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

const NoteDialog = ({ open, handleClose, note, onUpdateContent, onDelete }) => {
  const textFieldRef = useRef(null);
  const stateFieldRef = useRef(null);
  const handleSave = () => {
    const textFieldValue = textFieldRef.current.value;
    const stateFieldValue = stateFieldRef.current.value;
    if (textFieldValue !== note.content) {
      noteService.updateNoteContent(note.id, textFieldValue).then(() => {
        onUpdateContent(textFieldRef.current.value);
        handleClose();
      });
    }
    if (stateFieldValue !== note.state) {
      noteService.updateNoteState(note.id, stateFieldValue).then(() => {
        onDelete(note.id);
        handleClose();
      });
    }
  };
  const handleDelete = () => {
    noteService.logicalDeleteNote(note.id).then(() => {
      onDelete(note.id);
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
              {note.id}
            </Typography>
            <Button
              autoFocus
              color="warning"
              onClick={handleDelete}>
              delete
            </Button>
            <Button
              autoFocus
              color="inherit"
              onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="form"
          sx={{ width: "80%", maxWidth: "100%", margin: "auto" }}
          noValidate
          autoComplete="off">
          <div>
            <TextField
              id="content"
              label="Content"
              fullWidth
              multiline
              rows={10}
              defaultValue={note.content}
              inputRef={textFieldRef}
            />
          </div>
          <Divider sx={{ my: 2 }} />
          <div>
            <FormControl fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                id="state"
                defaultValue={note.state}
                label="State"
                inputRef={stateFieldRef}>
                <MenuItem value={0}>Draft</MenuItem>
                <MenuItem value={1}>Publish</MenuItem>
                <MenuItem value={2}>Hiding</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </Dailog>
    </React.Fragment>
  );
};

export default NoteDialog;

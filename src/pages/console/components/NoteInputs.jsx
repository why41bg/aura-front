import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import noteService from "../../../services/noteService";

const NoteInputs = () => {
  const [content, setContent] = useState("");
  return (
    <Box
      component="form"
      sx={{ width: "100%", margin: "auto" }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="content"
          label="Input content here"
          fullWidth
          multiline
          rows={13}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          autoFocus
          color="warning"
          onClick={() => {
            setContent("");
          }}>
          clear
        </Button>
        <Button
          autoFocus
          color="inherit"
          onClick={() => {
            noteService.createNote(content);
            setContent("");
          }}>
          save
        </Button>
      </div>
    </Box>
  );
};

export default NoteInputs;

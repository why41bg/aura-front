import * as React from "react";
import Card from "@mui/material/Card";
import Cardcontent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import NoteDialog from "./NoteDialog";

function NoteCard({ initNote }) {
  const [note, setNote] = React.useState(initNote);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onUpdate = (updateContent) => {
    setNote({
      ...note,
      content: updateContent,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 345, height: "100%", overflow: "auto" }}>
      <CardActionArea onClick={handleOpen}>
        <Cardcontent>
          <Typography
            variant="body2"
            sx={{ color: "text" }}>
            {note.content}
          </Typography>
        </Cardcontent>
      </CardActionArea>
      <NoteDialog
        open={open}
        handleClose={handleClose}
        note={note}
        onUpdate={onUpdate}
      />
    </Card>
  );
}

export default NoteCard;

import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Cardcontent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function NoteCard({ noteContent }) {
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", flexGrow: 1 }}>
      <Cardcontent
        sx={{
          height: "100%",
          overflow: "auto",
        }}>
        <Typography
          component="h5"
          variant="subcontent2"
          gutterBottom>
          {noteContent}
        </Typography>
      </Cardcontent>
    </Card>
  );
}

NoteCard.propTypes = {
  noteContent: PropTypes.string.isRequired,
};

export default NoteCard;

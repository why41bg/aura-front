import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NoteCard from "./NoteCard";
import Grid from "@mui/material/Grid2";

const MainGrid = ({ data }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography
        component="h2"
        variant="h6"
        sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}>
        {data.map((noteContent, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, lg: 4 }}>
            <NoteCard noteContent={noteContent} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainGrid;

import * as React from "react";
import Stack from "@mui/material/Stack";
import Search from "./Search";

export default function Header({ filterNotes, openInputs }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}>
      <Stack
        direction="row"
        sx={{ gap: 1 }}>
        {!openInputs && <Search filterNotes={filterNotes} />}
      </Stack>
    </Stack>
  );
}

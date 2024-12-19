import * as React from "react";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainGrid from "./components/MainGrid";
import NoteInputs from "./components/NoteInputs";

import noteService from "../../services/noteService";

const Console = () => {
  const [initNotes, setInitNotes] = React.useState([]);
  const [notesToDisplay, setNotesToDisplay] = React.useState([]);
  const [openInputs, setOpenInputs] = React.useState(true);
  const changeMainContent = (text) => {
    if (text === "Draft") {
      noteService.getAllDraft().then((notes) => {
        setInitNotes(notes);
        setNotesToDisplay(notes);
        setOpenInputs(false);
      });
    } else if (text === "Publish") {
      noteService.getAllPublish().then((notes) => {
        setInitNotes(notes);
        setNotesToDisplay(notes);
        setOpenInputs(false);
      });
    } else if (text === "Hiding") {
      noteService.getAllHidding().then((notes) => {
        setInitNotes(notes);
        setNotesToDisplay(notes);
        setOpenInputs(false);
      });
    } else if (text === "Recycle") {
      noteService.getAllRecycle().then((notes) => {
        setInitNotes(notes);
        setNotesToDisplay(notes);
        setOpenInputs(false);
      });
    } else {
      setOpenInputs(true);
    }
  };
  const filterNotes = (searchValue) => {
    if (searchValue === "") {
      setNotesToDisplay(initNotes);
      return;
    }
    setNotesToDisplay(
      initNotes.filter((note) => {
        return note.content.includes(searchValue);
      })
    );
  };
  const onDelete = (noteId) => {
    setNotesToDisplay(
      notesToDisplay.filter((note) => {
        return note.id !== noteId;
      })
    );
  };

  return (
    <div>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu changeMainContent={changeMainContent} />
        <AppNavbar changeMainContent={changeMainContent} />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)` : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}>
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}>
            <Header
              filterNotes={filterNotes}
              openInputs={openInputs}
            />
            {openInputs && <NoteInputs />}
            {!openInputs && (
              <MainGrid
                data={notesToDisplay}
                onDelete={onDelete}
              />
            )}
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Console;

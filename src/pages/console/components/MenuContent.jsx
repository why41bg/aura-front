import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";

const mainListItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Draft", icon: <DraftsIcon /> },
  { text: "Publish", icon: <ArticleIcon /> },
  { text: "Hiding", icon: <VisibilityOffIcon /> },
  { text: "Recycle", icon: <DeleteIcon /> },
];

export default function MenuContent({ changeMainContent }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    changeMainContent(index);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                },
              }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

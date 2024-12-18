import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function Search({ filterNotes }) {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    filterNotes(event.target.value);
  };
  return (
    <FormControl
      sx={{ width: { xs: "100%", md: "25ch" } }}
      variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        value={searchValue}
        onChange={handleSearchChange}
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment
            position="start"
            sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

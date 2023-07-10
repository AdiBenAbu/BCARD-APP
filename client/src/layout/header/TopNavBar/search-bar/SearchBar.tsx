import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const color = isDark ? "black" : "black";
  const handleChange = ({ target }: any) => setSearch({ q: target.value });
  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          sx={{ backgroundColor: "#e3f2fd", color: { color } }}
          onChange={handleChange}
          value={searchParams.get("q") ?? ""}
          placeholder="Search"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" sx={{ color: { color } }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;

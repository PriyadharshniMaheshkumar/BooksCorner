import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const AutoSuggest = ({
  items,
  value,
  onChange,
  onInputChange,
  placeholder,
  ...other
}) => (
  <div className="autoSuggest">
    <Autocomplete
      multiple
      options={items}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="Select" placeholder="Add More" />
      )}
      sx={{ width: "500px" }}
    />
  </div>
);

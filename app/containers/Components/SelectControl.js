import React from "react";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

const buildMenuItems = name => (
  <MenuItem key={name} value={name}>
    {name}
  </MenuItem>
);

export default ({ classes, label, value, options, handleChange }) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="select-multiple">{label}</InputLabel>
    <Select
      value={value}
      onChange={handleChange}
      input={<Input id="select-multiple" />}
    >
      {options.map(buildMenuItems)}
    </Select>
  </FormControl>
);

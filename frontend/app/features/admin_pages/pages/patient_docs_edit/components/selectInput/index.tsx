import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, NativeSelect, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface InterfaceSelectInputItens {
  names: string[],
  allOptions: string[],
  tagName: string,
  setFormData: Dispatch<SetStateAction<string>>
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectInputItens({setFormData, names, allOptions, tagName}:InterfaceSelectInputItens){
  const [personName, setPersonName] = React.useState<string[]>(names);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return(
      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{tagName}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {allOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}
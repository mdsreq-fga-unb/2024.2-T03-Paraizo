import { Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface InterfaceSelectInputItens {
    tag: string,
    names: Array<string>,
    arrayFormData: Array<string>,
    setArrayFormData: Dispatch<SetStateAction<Array<string>>>
}

export default function SelectInputItens({arrayFormData, setArrayFormData, names, tag}:InterfaceSelectInputItens){
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
    const handleChangeArray = (event: SelectChangeEvent<typeof arrayFormData>) => {
        const {
          target: { value },
        } = event;
        setArrayFormData(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    return (
        <>
        <InputLabel id="multiple-checkbox-label-cadeira-posterior">{tag}</InputLabel>
                <Select
                labelId="multiple-checkbox-label-cadeira-posterior"
                id="multiple-checkbox-label-cadeira-posterior"
                multiple
                value={arrayFormData}
                onChange={handleChangeArray}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={arrayFormData.includes(name)} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
        </>
    )
}
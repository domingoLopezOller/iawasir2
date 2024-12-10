import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete, TextField } from '@mui/material';
import { MostrarHeroe } from './paginaWeb/Heroe';

const heroes = [
  {label: 'Superman'},
  {label: 'Grenn Lantern'},
  {label: 'Wonder Woman'},
];

export default function HeroAutocomplete() {
  return (
    <div>
     <Box sx={{ minWidth: 120 }}>
      <h5>Marvel</h5>
        <Autocomplete disablePortal
        options={heroes} 
       getOptionLabel={(option) => option.label}
       renderInput={(params) => <TextField {...params} label="Choose a hero"/>} 
        fullWidth
       />
    </Box>
    </div>
  );
}

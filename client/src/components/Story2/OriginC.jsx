/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { NetFlixCountries } from '../../NetFlixCountries';

function OriginC(props) {
  const { changeOrigin } = props;

  const [value, setValue] = React.useState('Type or Select');
  const [inputValue, setInputValue] = React.useState('');

  const options = NetFlixCountries.map((option) => option.country);

  const clickHandler = () => {
    // looks for countries object in netflix array and extracts the countries 'id'
    const originId = NetFlixCountries.filter((country) => country.country === value)[0].id;
    // sets the Story2 state to the ID in order to make proper axios get request
    changeOrigin(originId);
  };
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="menu-1"
        options={options}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} country="Country" />}
      />
      <Button variant="contained" sx={{ width: 150 }} onClick={clickHandler}>Select Origin</Button>
    </div>
  );
}

export default OriginC;

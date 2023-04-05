import { useEffect, useState } from 'react';
import { useAppDispatch } from "../../store/hooks";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getMovies } from '../../api/movie';

export const Filter = () => {
  const dispatch = useAppDispatch();  
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    console.log(filterName);
    
    dispatch(getMovies(filterName));
  }, [filterName]);

  const handleChange = (event: SelectChangeEvent) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 140, position: 'absolute', top: -30, right: 90 }} size="small">
        <InputLabel color='secondary' sx={{ color: 'white'}}>Filter</InputLabel>
        <Select
          value={filterName}
          onChange={handleChange}
          autoWidth
          autoFocus
          label="Filter"
          color='secondary'
          sx={{ color: 'white'}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'popularity.desc'}>Сurrent popular</MenuItem>
          <MenuItem value={'vote_average.desc'}>High rating</MenuItem>
          <MenuItem value={'release_date.desc'}>Recently released</MenuItem>
          <MenuItem value={'revenue.desc'}>The most profitable</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
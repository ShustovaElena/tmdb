import { useEffect, useState } from 'react';
import { useAppDispatch } from "../../store/hooks";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getMovies } from '../../api/movie';

export const Filter = () => {
  const dispatch = useAppDispatch();  
  const [filterName, setFilterName] = useState('popularity.desc');

  useEffect(() => {
    dispatch(getMovies(filterName));
    dispatch({type: 'SET_FILTER_NAME', payload: filterName});
  }, [filterName]);

  const handleChange = (event: SelectChangeEvent) => {
    setFilterName(event.target.value);
    dispatch({ type: 'SET_SEARCH_NAME', payload: '' });
  };

  return (
    <div style={{ margin: '0 auto', width: '200px' }}>
      <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
        <Select
          value={filterName}
          onChange={handleChange}
          autoWidth
          color='secondary'
          sx={{ color: 'var(--text-color)'}}
        >
          <MenuItem value={'popularity.desc'}>Сurrent popular</MenuItem>
          <MenuItem value={'vote_average.desc'}>High rating</MenuItem>
          <MenuItem value={'release_date.desc'}>Recently released</MenuItem>
          <MenuItem value={'revenue.desc'}>The most profitable</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
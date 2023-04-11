import { useDeferredValue, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { getDataBySearch, getPersonBySearch } from '../../api/search';
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const { currentPage } = useAppSelector((state) => state.actors);
  const dispatch = useAppDispatch();  
  const [userInput, setUserInput] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const deferredText = useDeferredValue(userInput);

  useEffect(() => {  
    if (deferredText !== '') {
      if (currentPage === 'movies') {
        dispatch(getDataBySearch(deferredText));
        dispatch({ type: 'SET_SEARCH_NAME', payload: deferredText });
      }
      if (currentPage === 'actors') {
        dispatch(getPersonBySearch(deferredText));
        dispatch({ type: 'SET_SEARCH_NAME', payload: deferredText });
      }
    }
  }, [deferredText])

  const handleChangeSearch = (event: React.ChangeEvent) => { 
    setUserInput((event.target as HTMLInputElement).value);
  }

  const handleBlurSearch = () => {
    setUserInput('');
    setIsSearch(false);
  }

  const handleSearchButton = () => {
    setIsSearch(true);
  }

  return (
    <>
      {isSearch ? 
      <TextField
        label="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        color="secondary"
        size="small"
        onChange={handleChangeSearch}
        onBlur={handleBlurSearch}
        value={userInput}
        sx={{ opacity: 0, animation: 'animation .5s forwards'}}
    /> :
      <IconButton color="secondary" onClick={handleSearchButton}>
        <SearchIcon />
      </IconButton>
    }
  </>
  );
}
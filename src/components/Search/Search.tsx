import React from 'react';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  lable: string;
}

export const Search = React.memo(({ onChange, value, lable }: SearchProps) => {
  return (
    <TextField
      onChange={onChange}
      value={value}
      sx={{ width: '100%' }}
      label={lable}
      variant="outlined"
    />
  );
});

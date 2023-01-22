import TextField from '@mui/material/TextField';

export const Search = ({ onChange, value }: any) => {
  return (
    <TextField
      onChange={onChange}
      value={value}
      sx={{ width: '40%' }}
      label="The most successful IT companies in 2023"
      variant="outlined"
    />
  );
};

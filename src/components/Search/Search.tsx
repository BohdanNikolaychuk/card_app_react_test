import TextField from '@mui/material/TextField';

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  lable: string;
}

export const Search = ({ onChange, value, lable }: SearchProps) => {
  return (
    <TextField
      onChange={onChange}
      value={value}
      sx={{ width: '100%' }}
      label={lable}
      variant="outlined"
    />
  );
};

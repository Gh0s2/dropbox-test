import { styled, TextField } from "@mui/material";

/** Styled component */

export const FolderNameTextField = styled(TextField)({
  '& input, & label, & label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#434240',
    },
    '&:hover fieldset, &.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

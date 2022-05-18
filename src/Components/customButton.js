import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

 const customButton=()=> {
     const {type, id, className, disabled, onClick, variant, text , style} =props
  return (
    <Stack direction="row" spacing={2}>
      
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
        onClick={onClick}
      >
        {text}
      </LoadingButton>
    </Stack>
  );
}
export default customButton
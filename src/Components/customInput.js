import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 const customInput=(props)=> {
   const {label,id,onChange,value,name}=props
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} name={name} label={label} onChange={onChange} value={value} variant="outlined" />
      
    </Box>
  );
}

export default customInput

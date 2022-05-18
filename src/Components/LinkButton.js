import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LinkButton=(props)=>{

    const {text,onClick}=props

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small" onClick={onClick}>{text}</Button>
        
      </div>
     
    </Box>
  );
}

export default LinkButton

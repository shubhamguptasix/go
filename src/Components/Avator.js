import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Avator=(props)=> {
    const {src}=props
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={src}
        sx={{ width: 50, height: 50 }}
      />
    </Stack>
  );
}
export default  Avator
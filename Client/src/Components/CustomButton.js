import React from 'react';
import { Button, Typography } from '@mui/material';


const CustomButton = ({ children }) => (
<Button sx={{ 
    mb: 2, 
    mt: 4, 
    backgroundColor: '#301934', // Change button background color here
    '&:hover': {
      backgroundColor: '#4e1b3c', // Change hover effect color here
    }
  }}>
    <Typography sx={{ 
      color: '#ffe6e6' // Change the text color here
    }}>
      {children}
    </Typography>
  </Button>
);

export default CustomButton;

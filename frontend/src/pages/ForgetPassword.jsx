import { Box, Button, TextField } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react'
import { Link } from 'react-router';

export default function ForgetPassword() {
  return (
<>
<h4 className='m-4'>Forgot Password?</h4>
<div className='forgot-password'>
<Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 800, margin: '0 auto' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 , fontSize: 40}} />
        <TextField id="Enter-Email" label="Enter Your Email" variant="standard" className='w-100' />
      <Link to='/changePassword'> <Button>Next</Button></Link> 
      </Box>
      </div>
</>  
)
}

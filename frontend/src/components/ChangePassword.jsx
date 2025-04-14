import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ChangePassword() {
        const [showPassword, setShowPassword] = React.useState(false);
        const handleClickShowPassword = () => setShowPassword((show) => !show);

        

  return (
<>
<h4 className='m-4'>
<Button>
<ArrowBackIcon sx={{ color: 'action.active', fontSize: 30, margin: 1}} />
</Button>
Forgot Password?</h4>
<div className='forgot-password p-1'>
<Box sx={{ maxWidth: 800, margin: '0 auto' }}>

          <Input className='w-100 p-2'
            id="New-password"
            placeholder='Enter New Password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

<Input className='w-100 p-2 my-4'
            id="New-confirm-password"
            placeholder='Enter Confirm Password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        <Button variant='contained' className='w-100'>Change Password</Button>
        </Box>
      </div>
</>  
)
}

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button } from '@mui/material';

export default function ChangePassword() {
        const [showPassword, setShowPassword] = React.useState(false);
        const handleClickShowPassword = () => setShowPassword((show) => !show);

        const handleMouseDownPassword = (event) => {
            event.preventDefault();
          };
        
          const handleMouseUpPassword = (event) => {
            event.preventDefault();
          };

  return (
<>
<h4 className='m-4'>Forgot Password?</h4>
<div className='forgot-password'>
<Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 800, margin: '0 auto' }}>

<FormControl  variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input className='w-100'
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button>Next</Button>
        </Box>
      </div>
</>  
)
}

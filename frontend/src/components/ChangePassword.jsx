import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import axiosLocal from '../services/axiosLocalInstance';

export default function ChangePassword() {
    const navigate = useNavigate()
    const location = useLocation();
    const { email } = location.state

    const goBack = () => {
        navigate(-1); // Goes back one step in history
    }

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        const Data = {
            email: email,
            newPassword: e.target.newPassword.value,
            confirmPassword: e.target.confirmPassword.value,
        }
        try {
            const response = await axiosLocal.post('/entry/changePassword', Data);
            console.log(response)
            if (response.status === 200) {
                await Swal.fire({
                    title: response.data.message,
                    icon: "success",
                })
                navigate('/login')
            }
        }
        catch (error) {
            Swal.fire({
                icon: "error",
                title: 'Error changing password!',
                text: error.response.data.message,
            });
        }
    }

    return (
        <>
            <h4 className='m-4'>
                <Button onClick={goBack}>
                    <ArrowBackIcon sx={{ color: 'action.active', fontSize: 30, margin: 1 }} />
                </Button>
                Forgot Password?</h4>

            <form onSubmit={handleChangePassword} className='forgot-password p-1'>
                <Box sx={{ maxWidth: 800, margin: '0 auto' }}>

                    <Input className='w-100 p-2'
                        id="New-password"
                        placeholder='Enter New Password'
                        name='newPassword'
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
                        name='confirmPassword'
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
                    <Button type='submit' variant='contained' className='w-100'>Change Password</Button>
                </Box>
            </form>
        </>
    )
}

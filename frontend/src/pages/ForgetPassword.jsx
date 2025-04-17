import { Box, Button, TextField } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'
import axiosLocal from '../services/axiosLocalInstance';

export default function ForgetPassword() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const handleEmail = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
        }
        try {
            const response = await axiosLocal.post('/entry/forgotPassword', data)
            if (response.status === 200) {
                toast.success(response.data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => {
                        // Redirect to home page after toast is closed
                        navigate('/changePassword', { state: data })   // home route
                    }
                })
            }
        }
        catch {
            Swal.fire({
                icon: "error",
                title: "Email not found!",
              });
        }
    }
    return (
        <>
            <h4 className='m-4'>
                <Button onClick={() => {navigate(-1)}}>
                    <ArrowBackIcon sx={{ color: 'action.active', fontSize: 30, margin: 1 }} />
                </Button>
                Forgot Password?</h4>

            <form className='forgot-password' onSubmit={handleEmail}>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />

                <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 800, margin: '0 auto' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 40 }} />
                    <TextField id="Enter-Email" label="Enter Your Email" variant="standard" className='w-100' value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' required />
                    <Button type='submit'>Next<NavigateNextRoundedIcon /></Button>
                </Box>
            </form>

        </>
    )
}

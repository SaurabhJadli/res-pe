import { Box, Button, TextField } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export default function ForgetPassword() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    console.log(email);

    const handleEmail = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
        };
try{
    const response = await axios.post('http://localhost:3000/api/entry/forgotPassword', data)
    console.log(response);
    if (response.status === 200) {
        console.log('User Found');
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
                navigate('/changePassword')   // home route
            }
        });
    }
}   
catch {
    console.log('User Not Found');
    toast.error('user Not Found!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}     
       
        
    }
    
  return (
<>
<h4 className='m-4'>
<Button>
<ArrowBackIcon sx={{ color: 'action.active', fontSize: 30, margin: 1}} />
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
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 , fontSize: 40}} />
        <TextField id="Enter-Email" label="Enter Your Email" variant="standard" className='w-100' value={email} onChange={(e)=> {setEmail(e.target.value)}} type='email' required />
      <Button type='submit'>Next<NavigateNextRoundedIcon /></Button>
      </Box>
</form>
      
</>  
)
}

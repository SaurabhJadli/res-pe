import { Link, useNavigate } from "react-router";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Bounce, toast, ToastContainer } from "react-toastify";
import respeIcon2NoBG from "../assets/logos/respeIcon2NoBG.png"
import Swal from 'sweetalert2'
import axiosLocal from "../services/axiosLocalInstance";

export default function Login() {
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        try {
            const res = await axiosLocal.post('/entry/login', loginData)
            console.log(res)
            localStorage.setItem('token', res.data.token);
            if (res.status === 200) {
                console.log(res.data.message)
                toast.success(res.data.message, {
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
                        navigate('/home')   // home route
                    }
                });
            }
        }
        catch (error) {
            // console.log(error)
            // toast.error("login failed", {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: true,
            //     closeOnClick: false,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     transition: Bounce,
            // });
            Swal.fire({
                icon: "error",
                title: "login failed",
                text: error.response.data.message,
              });
        }
    }
    return (
        <>
            <main className="position-relative login-main">
                <div className="form-contanier p-4 shadow-lg">
                    <img src={respeIcon2NoBG} alt="logo" className="logo img-fluid mb-2" loading="lazy" />
                    {/* logo */}
                    <h2 className="text-center">Log in</h2>

                    <form className="p-1  form" onSubmit={handleLogin}>
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

                        <div className="mb-3 form-ele">
                            <TextField
                                id="Email"
                                label="Email"
                                variant="outlined"
                                className="form-control"
                                aria-describedby="email"
                                name="email"
                                type="email"
                                required />
                        </div>

                        <div className="mb-3">
                            <TextField
                                id="password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                className="form-control"
                                name="password"
                                aria-describedby="password"
                                required />
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            className="btn btn-primary w-100 mt-3 p-2">
                            Log in
                        </Button>

                        <div className="d-flex position-relative mt-4">
                            <p className="mt-3">Not a member?
                                <Link to="/signup">
                                    Sign up
                                </Link>
                            </p>
                            <p className="mt-3 position-absolute end-0"><Link to='/forgotPassword'>forgot password?</Link></p>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>)
}

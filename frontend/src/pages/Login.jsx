import { Link, useNavigate } from "react-router";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import axios from "axios";
import TextField from '@mui/material/TextField';
import { Bounce, toast, ToastContainer } from "react-toastify";
import respeIcon2NoBG from "../assets/logos/respeIcon2NoBG.png"


export default function Login() {
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        console.log(loginData)

        try {
            const res = await axios.post('http://localhost:3000/api/entry/login', loginData)
            console.log(res)
            if (res.status === 200) {
                console.log(res.data.message)
                toast.success(res.data.message, {
                    position: "top-center",
                    autoClose: 1500,
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
            console.log(error)
            toast.error("login failed", {
                position: "top-center",
                autoClose: 5000,
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
                            <TextField id="Email" label="Email" variant="outlined" className="form-control" aria-describedby="emailHelp" name="email" />
                        </div>

                        <div className="mb-3">
                            <TextField
                                id="password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                className="form-control"
                                name="password"
                            />
                        </div>

                            <Button type="submit" variant="contained" className="btn btn-primary w-100 mt-3 p-2">Log in</Button>

                        <div className="d-flex position-relative m-4">
                            <p className="mt-3">Not a member?
                                <Link to="/signup">
                                    Sign up
                                </Link>
                            </p>
                            <p className="mt-3 position-absolute end-0"><a className="link-secondary" href="#">forgot password?</a></p>

                        </div>

                    </form>
                </div>

            </main>
            <Footer />
        </>)
}

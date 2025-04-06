import { Link, useNavigate } from "react-router";
import Footer from "../components/Footer";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import respeIcon2NoBG from "../assets/logos/respeIcon2NoBG.png"

export default function Signup() {
    const navigate = useNavigate()

    async function signupData(e) {
        e.preventDefault();
        
        try {
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                confirmPassword: e.target.confirmPassword.value
            };
    
            const response = await axios.post('http://localhost:3000/api/entry/register', formData);
            
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose: () => {
                    // Redirect to login page after toast is closed
                    navigate('/login')  // login route
            }
        })
        } 
        catch (error) {
            // Handle different error scenarios
            const errorMessage = error.response?.data?.message || 
                               error.message || 
                               'An unexpected error occurred';
            
            toast.error(errorMessage, {
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
                {/* //logo */}
                    <h2 className="text-center">Sign up here</h2>
                    <form className="p-1  form" onSubmit={signupData}>
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

                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            aria-describedby="NameHelp"
                            minLength="2"
                            maxLength="40"
                            required
                             />
                        </div>

                        <div className="mb-3 form-ele">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            aria-describedby="emailHelp"
                            maxLength="80"
                            required
                             />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            minLength="6"
                            maxLength="100"
                            required
                             />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            name="confirmPassword"
                            minLength="6"
                            maxLength="100"
                            required
                             />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mt-3">Sign up</button>

                        <p className="mt-3">Already a member?
                            <Link to="/login">
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>

            </main>
            <Footer />
        </>)
}

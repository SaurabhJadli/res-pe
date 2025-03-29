import { Link } from "react-router";
import Footer from "../components/Footer";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import respeIcon2NoBG from "../assets/logos/respeIcon2NoBG.png"

export default function Signup() {

    function signupData(e) {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        }
        axios.post('http://localhost:3000/api/entry/register', formData)
            .then((res) => {
                // alert(res.data.message)
                toast.success(res.data.message, {
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
            })
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
                            <input type="text" className="form-control" name="name" aria-describedby="NameHelp" />
                        </div>

                        <div className="mb-3 form-ele">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" name="confirmPassword" />
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

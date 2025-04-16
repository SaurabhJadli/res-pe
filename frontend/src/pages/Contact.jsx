import Footer from "../components/Footer";
import address from "../assets/logos/address.png"
import contact from "../assets/logos/contact.png"
import email from "../assets/logos/email.png"
import instagram from "../assets/logos/instagram.png"
import greenChatni from "../assets/greenChatni.jpg"
import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useRef } from "react";
import axiosLocal from "../services/axiosLocalInstance";
import Swal from 'sweetalert2'

export default function Contact() {
  const formRef = useRef();

  function messageData(e) {
    e.preventDefault();

    const messageData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    }
    axiosLocal.post('/contact/message', messageData)
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
        formRef.current.reset();

}

  return (
    <div className="position-relative">
      <Navbar />
      <br />
      <div style={styles.container}>
          <h1>Contact Us – Res-pe</h1>
        <div className="bg-primary-subtle rounded p-3">
          <img src={greenChatni} className="img-fluid rounded-4" alt="road from forest"></img>
          <br /><br />
          <h3>We’d love to hear from you! Whether you have a question, feedback, or a delicious recipe to share, feel free to reach out to us.</h3>
        </div>

        <br /><br /><br />
        <h2><b>Connect with Us</b></h2>

        <ul className="navbar-nav">
          <li className="m-4">
            <img src={contact} className="rounded-circle img-fluid category-img" alt="phone logo" />

            <h3>
              Phone</h3>
            <h4>248 123-4567</h4>
          </li>

          <li className="m-4">
            <img src={email} className=" img-fluid category-img" alt="email logo" />

            <h3>
              Email</h3>
            <h4>support@respe.com</h4>
          </li>

          <li className="m-4">
            <img src={address} className="img-fluid category-img" alt="address logo" />

            <h3>Address</h3>
            <h4>123 Main St, Anytown India</h4>
          </li>

          <li className="m-4">
            <img src={instagram} className="rounded-circle img-fluid category-img" alt="instagram logo" />

            <h3>Social Media</h3>
            <h4>@respeChef</h4>
          </li>
        </ul>
      </div>

      <div className="m-2 bg-danger-subtle rounded p-4 w-75 mx-auto" >
        <h2>📝 Send Us a Message</h2>
        <h4>Have a query or suggestion? Fill out the form below, and we'll get back to you as soon as possible!</h4>

        <form onSubmit={messageData} ref={formRef}>

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

          <TextField
            id="name-input"
            placeholder="Name"
            type="text"
            className="form-control m-2"
            name="name"
            required
          />

          <TextField
            id="email-input"
            placeholder="Email"
            type="email"
            className="form-control mx-2"
            name="email"
            required
          />

          <TextField
            id="subject-input"
            placeholder="Subject"
            type="text"
            className="form-control m-2"
            name="subject"
            required
          />

          <TextField
            id="message-input"
            placeholder="Message"
            type="text"
            className="form-control mx-2"
            name="message"
            required
          />

<div className="d-flex text-center">
<Button type="submit" variant="contained" className="btn btn-primary w-100 m-4 p-2">
Submit
</Button>
</div>

        </form>
      </div>
      <Footer />
    </div>

  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
};


// http://localhost:3000/api/contact/message
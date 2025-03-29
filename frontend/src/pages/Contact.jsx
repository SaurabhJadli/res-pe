import Footer from "../components/Footer";
import address from "../assets/logos/address.png"
import contact from "../assets/logos/contact.png"
import email from "../assets/logos/email.png"
import instagram from "../assets/logos/instagram.png"
import greenChatni from "../assets/greenChatni.jpg"
import { Button, TextField } from "@mui/material";



export default function Contact() {
  return (
    <div className="position-relative">
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
            <h4>@respetravel</h4>
          </li>
        </ul>
      </div>

      <div className="m-2 bg-danger-subtle rounded p-4 w-75 mx-auto" >
        <h2>📝 Send Us a Message</h2>
        <h4>Have a query or suggestion? Fill out the form below, and we'll get back to you as soon as possible!</h4>

        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.name.value);}}>
          <TextField
            id="name-input"
            placeholder="Name"
            type="text"
            className="form-control m-2"
            name="name"
          />

          <TextField
            id="email-input"
            placeholder="Email"
            type="email"
            className="form-control mx-2"
            name="email"
          />

          <TextField
            id="subject-input"
            placeholder="Subject"
            type="text"
            className="form-control m-2"
            name="subject"
          />

          <TextField
            id="message-input"
            placeholder="Message"
            type="text"
            className="form-control mx-2"
            name="message"
          />

<div className="d-flex text-center">
<Button type="submit" variant="contained" className="btn btn-primary w-100 m-4 p-2">Submit</Button>
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
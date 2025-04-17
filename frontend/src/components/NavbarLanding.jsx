import { Button } from "@mui/material";
import { Link } from "react-router";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import respeIcon2NoBG from "../assets/logos/respeIcon2NoBG.png"

export default function NavbarLanding() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>
                            <img src={respeIcon2NoBG} alt="logo" className="logo-nav img-fluid" loading="lazy" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse position-relative" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="home">
                                        <Button variant="text" color="">
                                            <HomeRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            Home
                                        </Button></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/aboutHome" className="nav-link">
                                        <Button variant="text" color="">
                                            <InfoRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            About
                                        </Button>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/contactHome" className="nav-link">
                                        <Button variant="text" color="">
                                            <ContactSupportRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            Contact
                                        </Button>
                                    </Link>
                                </li>

                                <li className="nav-item position-absolute end-0">
                                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{color: "#cd4132",}} /> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>)
}

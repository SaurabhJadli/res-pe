import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import respeIcon2NoBG from "../assets/logos/respeIcon2NoBG.png"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CategoryIcon from '@mui/icons-material/Category';

export default function Navbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    // Dropdown menu for Category -- Material UI
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null);
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid">
                        <Link to='/home' className="navbar-brand" aria-current="home">
                            <img src={respeIcon2NoBG} alt="res-pe logo" className="logo-nav img-fluid" loading="lazy" />
                        </Link>
                        <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Button>
                        <div className="collapse navbar-collapse position-relative" id="navbarNav">
                            <ul className="navbar-nav nav-li">

                                <li className="nav-item">
                                    <Link to='/home' className="nav-link active" aria-current="home">
                                        <Button variant="text" color="">
                                            <HomeRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            Home
                                        </Button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/aiChef' className="nav-link">
                                        <Button variant="text" color="">
                                            <AutoAwesomeRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            AI Chef
                                        </Button></Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link to='/favLi' className="nav-link">
                                    <Button variant="text" color="">
                                    <FavoriteBorderRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />Favorite
                                    </Button></Link>
                                </li> */}

                                <li className="nav-item nav-link">
                                        <Button
                                            id="fade-button"
                                            aria-controls={open ? 'fade-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                        <CategoryIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            Category
                                        </Button>
                                        <Menu
                                            id="fade-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}                                        >
                                            <Link to='/category' state={{category: 'dessert'}}><MenuItem onClick={handleClose}>Dessert</MenuItem></Link>
                                            <Link to='/category' state={{category: 'Side'}}><MenuItem onClick={handleClose}>Side</MenuItem></Link>
                                            <Link to='/category' state={{category: 'Starter'}}><MenuItem onClick={handleClose}>Starter</MenuItem></Link>
                                            <Link to='/category' state={{category: 'Vegan'}}><MenuItem onClick={handleClose}>Vegan</MenuItem></Link>
                                            <Link to='/category' state={{category: 'Vegetarian'}}><MenuItem onClick={handleClose}>Vegetarian</MenuItem></Link>
                                        </Menu>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        <Button variant="text" color="">
                                            <InfoRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            About
                                        </Button>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        <Button variant="text" color="">
                                            <ContactSupportRoundedIcon sx={{ fontSize: 30, margin: 0.5 }} />
                                            Contact
                                        </Button>
                                    </Link>
                                </li>

                                <li className="nav-item position-absolute end-0">
                                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" style={{color: "#cd4132",}} /> */}

                                    <Button onClick={handleLogout} variant="text" color='error' startIcon={<LogoutIcon />} >Log out</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        </>)
}

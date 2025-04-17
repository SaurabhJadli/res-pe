import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <>
            <footer className="text-center text-white footer w-100 mt-2 align-items-end">
                {/* <!-- Grid container --> */}
                <div className="container pt-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <FacebookIcon />
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <TwitterIcon />
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <InstagramIcon />
                        </a>

                        {/* <!-- Github --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><GitHubIcon /></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center text-dark p-3 cp-bg">
                    <big> &copy;</big>  2025 Res-pe. All rights reserved.
                    <p>Creator: Saurabh Jadli</p>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>)
}

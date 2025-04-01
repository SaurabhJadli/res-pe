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
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Github --> */}
                        <a
                            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center text-dark p-3 cp-bg">
                    &copy; 2025 Res-pe. All rights reserved.
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>)
}

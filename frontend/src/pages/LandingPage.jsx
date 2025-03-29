import { Link } from 'react-router';
import indianThali from '../assets/indianThali.png';
import tofu_curry from '../assets/tofu-curry.png';
import paneer_tikka_masala from '../assets/paneer_tikka_masala.png';
export default function Home() {
    return (
        <>
            <div className="home-main text-center mb-4 align-content-center">
                <div className="home-content">

                    <h2>Res-pe</h2>
                    <h4>Discover, Cook, Savor – Your Culinary Journey Starts Here!</h4>

                    <Link to="/login">

                        <button type="button" className="btn btn-primary btn-lg m-1">Log in</button>
                    </Link>

                    <Link to="/signup">

                        <button type="button" className="btn btn-secondary btn-lg m-1">Sign up</button>
                    </Link>
                </div>
            </div>

            <div className="row justify-content-center p-5">

                <div className="card mb-3 border-0 home-card">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img src={indianThali} className="img-fluid rounded" alt="indian Thali" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">What Are We About</h3>
                                <p className="card-text card-text-custom">Res-pe is a place where you can please your soul and tummy with
                                    delicious food recipes of all cuisine.
                                    And our service is absolutely free. So
                                    start exploring now.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex card mb-3 border-0 home-card">
                    <div className="row g-0 align-items-center">

                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">Improve Your Culinary Skills</h3>
                                <ul className="card-li card-text">
                                    <li>Learn new recepies</li>
                                    <li>Experiment with food</li>
                                    <li>Write your own recepies</li>
                                    <li>Know nutrition facts</li>
                                    <li>Get cooking tips</li>
                                    <li>Get ranked</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={tofu_curry} className="img-fluid rounded" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="card mb-3 border-0 home-card m-5 p-5">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img src={paneer_tikka_masala} className="img-fluid rounded-start" alt="paneer-tikka-masala" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">&quot;Savor the flavors, explore new cuisines, and indulge in the joy of cooking—because every bite tells a story!&quot;</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

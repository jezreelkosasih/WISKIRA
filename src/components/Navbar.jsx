// Import React Stuff
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav id="navbar" className="{ navbar navbar-home navbar-dark navbar-expand-md fixed-top }">
            <div className="{ container-fluid }">
                <Link className="{ navbar-brand }" id="navnav" to="/">Joshua <span>HOT</span>ama</Link>
                <button className="{ navbar-toggler }" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="navbarToggler" className="{ navbar-toggler-icon }"></span>
                </button>
                <div className="{ collapse navbar-collapse justify-content-end }" id="navbarNav">
                    <ul className="{ navbar-nav }">
                        <li className="{ nav-item }">
                            <a className="{ nav-link m-2 }" href="/">Home</a>
                        </li>
                        {/* button */}
                        <button onClick={() => navigate('./about')} className="{ m-auto ms-4 }" id="buttonNavbar" type="button">About Me</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;

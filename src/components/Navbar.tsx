import { Link } from 'react-router-dom'
import  "./Navbar.css"
import { useAuth0 } from '@auth0/auth0-react'


function Navbar() { 
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    const signOutOnClick = () => {
      logout();
    };

    const signInOnClick = () => {
      loginWithRedirect();
    };


  return (
    <nav> 
        <div id="header" className="fa-sharp fa-thin fa">
            <h1>Fit Buddy</h1>
            </div>
    <button>
        <Link to="/" className="navItems">Home</Link>
        <Link to="/about" className="navItems">About</Link>
        <Link to="/workouts" className="navItems">Workouts</Link>
        <Link to="/calendar" className="navItems">Timer</Link>
    </button>

    {
        !isAuthenticated ? 
        <button>
            <div>
                <Link to="/" onClick={signInOnClick} className='navItems'>
                    Login
                </Link>
            </div>
        </button>
        :
        <button>
            <div>
                <Link to="/" onClick={signOutOnClick} className='navItems'>
                    Sign Out
                </Link>
            </div>
        </button>
      }
                             
           <></>
            
        </nav>
    );
}

export default Navbar;
// importing AuthO
import { useAuth0 } from '@auth0/auth0-react';
// Importing Styles
import styled from '../assets/styles/nav.module.css';
  
function NavComp() {
  // De-structuring useAuth 
  const { isAuthenticated, loginWithRedirect, logout,user } = useAuth0();
  
  return (

    // Navbar
    <nav>
      {/* Navebar Left-Side */}
      <div className={styled.navLeft}>
        {/* Application title */}
        <div className={styled.appTitle}>
          Todo List
        </div>
      </div>
      {/* Navbar right-side */}
      <div className={styled.navRight}>
        {/* Showing Different elements depending on authorization */}
        {isAuthenticated
          // if LoggedIn
          ? (
            <ul>
              <li>
                {user.name}
              </li>
              {/* log out button */}
              <button
                className={styled.LogOut}
                onClick={() => logout({
                  logoutParams: {
                      returnTo: window.location.origin
              }})}>
                  Log Out
              </button>
            </ul>
            // If not Logged In
          ) : (
            <ul>
              {/* log in button */}
                <button
                  className={styled.LogIn}
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
            </ul>
            )}
      </div>
    </nav>
  );
}

// exporting components
export default NavComp;
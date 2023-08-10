import { useAuth0 } from '@auth0/auth0-react';
import styled from '../assets/styles/nav.module.css';
  
function NavComp() {
  const { isAuthenticated,loginWithRedirect,logout } = useAuth0();
  
  return (
    <nav>
      <div className={styled.navLeft}>
        <div className={styled.appTitle}>
          App name
        </div>
      </div>
      <div className={styled.navRight}>
          {
            isAuthenticated
              ? (
              <ul>
                <li>
                  Welcome User
                </li>
                  <button
                    className={styled.LogOut}
                    onClick={() => logout({
                      logoutParams: {
                        returnTo: window.location.origin
                      }})}
                  >
                    Log Out
                  </button>
              </ul>
            )
            : (
              <ul>
                  <button
                    className={styled.LogIn}
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
              </ul>
            )
          }
      </div>
    </nav>
  );
}

export default NavComp;
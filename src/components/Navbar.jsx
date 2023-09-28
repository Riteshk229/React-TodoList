
// Importing Styles
import styled from '../assets/styles/nav.module.css';
  
function NavComp() {
  
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
    </nav>
  );
}

// exporting components
export default NavComp;
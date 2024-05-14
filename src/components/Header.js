import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";


function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic, such as clearing authentication tokens, etc.
    setIsLoggedIn(false);
  };

  return (
    <Router forceRefresh={true}>
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">  
                <h3 className="bi me-2" width="40" height="32" aria-label="VuVuPool">VuVuPool</h3>
              </Link>  
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                {/* <li><Link to="/" forceRefresh={true} className="nav-link px-2 text-secondary" style={{ textDecoration: 'none' }}>Home</Link></li> */}
                {/* <li><Link to="/faqs" className="nav-link px-2 text-white" style={{ textDecoration: 'none' }}>FAQs</Link></li> */}
                {/* <li><Link to="/about" className="nav-link px-2 text-white" style={{ textDecoration: 'none' }}>About</Link></li> */}
              </ul>    
              <div class="text-end">
              {isLoggedIn ? (
                  // Dropdown menu for authenticated user
                  <div className="dropdown text-end">
                    <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small">
                      <li><a className="dropdown-item" href="#">New project...</a></li>
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#" onClick={handleLogout}>Sign out</a></li>
                    </ul>
                  </div>
                ) : (
                  // Login and sign-up buttons
                  <>
                  <button type="button" className="btn btn-outline-light me-2">
                    <Link to="/login" forceRefresh={true} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                  </button>
                  <button type="button" className="btn btn-warning">
                    <Link to="/sign-up" forceRefresh={true} style={{ textDecoration: 'none', color: 'black'}}>Sign-up</Link>
                  </button>
                  </>
              )}
              </div>              
          </div>
        </div>
      </header>
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/faqs" element={<FAQs />} /> */}
        <Route path="/login" forceRefresh={true} element={<Login />} />
        <Route path="/sign-up"  forceRefresh={true} element={<SignUp />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default Header;

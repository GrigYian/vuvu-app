import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const googleClietId = process.env.GOOGLE_CLIENT_ID
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  const responseGoogle = (response) => {
    // Handle the Google OAuth response
    if (response.profileObj) {
      // User is authenticated, perform actions such as storing user data
      console.log('User authenticated:', response.profileObj);
    } else {
      // Authentication failed or user declined
      console.log('Authentication failed');
    }
  };

  return (
    <div style={{minHeight: "79vh"}}>
    <div className='container col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-10 align-items-center mt-5 py-4 bg-body-tertiary border rounded'>    
        <div className="form-login w-100 m-auto">
        <form className='p-5 m-3 pb-3'>
            
            <div className="form-floating">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              class="form-control rounded-top" 
              id="floatingInput" 
              placeholder="name@example.com" 
              control-id="ControlID-1"
              required="true"
            />
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control rounded-bottom" 
              id="floatingPassword" 
              placeholder="Password" 
              control-id="ControlID-2"
              required="true"
            />
            <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" control-id="ControlID-3"/>
            <label class="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
            </div>
            <button
              method='POST'
              onClick={handleLogin} 
              class="btn btn-warning w-100 py-2" 
              type="submit" 
              control-id="ControlID-4">Login
            </button>
            </form>
        </div>
        <div className='px-5'>
        <div className="separator mb-3 pb-3 px-3"><h5 className=" fw-normal text-secondary">Or</h5></div>
        <GoogleLogin
          disabled={false}
          clientId={googleClietId}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle} // You can handle failure similarly
          cookiePolicy={'single_host_origin'}
        />
        </div>
        <p class="mt-5 mb-3 text-body-secondary">© {year}</p>
    </div>
    </div>
  );
};

export default Login;

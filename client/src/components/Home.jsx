import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';



const responseGoogle = (response) => {
  axios.get('/google')
    .then(data => console.info(data))
    .catch(err => console.warn(err));
  console.info(response);
};
const logout = (response) => {
  axios.get('/logout')
    .then(data => console.info(data))
    .catch(err => console.warn(err));
  console.info(response);
};


const Home = () => {
  return (


    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1955&q=80")',
      height: '1000px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll'
    }} >
      <GoogleLogin
        clientId='110527149847-9ngotcps08510vb19n4ireoj9nk7qrob.apps.googleusercontent.com'
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId="110527149847-9ngotcps08510vb19n4ireoj9nk7qrob.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>

    </div>

  );
};

export default Home;

import React from 'react';
import { auth, googleProvider } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        navigate('/user-selection');
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
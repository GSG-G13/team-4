
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      console.log(response);
      if (response.ok) {
      navigate("/");
        console.log('SignUp successful');
      } else {
        // throw new Error('SignUp failed');
        console.log(response);
      }
    } catch (error) {
      setError('An error occurred');
      console.log('An error occurred', error.message)   
     }
  };

  return (
    <div className='Sign'>
      <h1>SignUp</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;

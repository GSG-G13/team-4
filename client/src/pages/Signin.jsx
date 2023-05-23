
import { useState } from 'react';


const SignIn = () => {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (response.ok) {
        console.log('SignIn successful');
      } else {
        console.log(response);
      }
    } catch (error) {
      setError('An error occurred');
      console.log('An error occurred', error.message)   
     }
  };

  return (
    <div className='Sign'>
      <h1>SignIn</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;


import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        console.log(await response.json());
        
      } else {
        console.log('response error');
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

      <h3>I don't have an account <Link to="/signup">Sign-up</Link></h3>
    </div>
  );
};

export default SignIn;

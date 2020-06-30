import React from 'react';
import useInput from '../hooks/useInput';
import useAuth from '../hooks/useAuth';

function Login() {
  const [username, bindUsername, resetUsername] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');
  const { login } = useAuth();

  console.log('asdsad')
  const submit = () => {
    login();
  };

  return (
    <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            {...bindUsername}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            {...bindPassword}
          />
        </div>
        <button onClick={submit}>Log in</button>
    </div>
  );
}

export default Login;
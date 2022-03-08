import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    event.preventDefault();

    // some fancy firebase login
  }

  const register = (event) => {
    event.preventDefault();

    // some fancy firebase register
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={event => setEmail(event.target.value)}></input>

          <h5>Password</h5>
          <input type='password' value={password} onChange={event => setPassword(event.target.value)}></input>

          <button
            className="login__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in, you agree to AMAZON FAKE CLONE's Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice, and our Interest Based Ads Notice.
        </p>

        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create your FAKE Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login

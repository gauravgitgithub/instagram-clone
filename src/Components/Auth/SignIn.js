import React, {useState} from "react";
import './SignIn.css';
import {auth, provider} from "../../Config/Firebase";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };


  return (
    <div className="signin__instagram">
      <h3>Sign In</h3>
      <div className="formContainer__instagram">
        <p className="formError__instagram">Please enter email id.</p>
        <form className="siginform__instagram">
           <div className="__emailInupt">
                <p>Email</p>
                <input
                  type="email"
                  className="my-1 p-1 w-full"
                  name="userEmail"
                  value = {email}
                  placeholder="E.g: example@gmail.com"
                  id="userEmail"
                  onChange = {(event) => onChangeHandler(event)}
                />
           </div>
           <div className="__passwordInupt">
                <p>Password</p>
                <input
                  type="password"
                  className="mt-1 mb-3 p-1 w-full"
                  name="userPassword"
                  value = {password}
                  placeholder="Your Password"
                  id="userPassword"
                  onChange = {(event) => onChangeHandler(event)}
                />
           </div>
           <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="or__instagram">or</p>
        <button className="signingoogle__instagram" onClick = {() => {auth.signInWithPopup(provider)}}>
              <img alt="google_signin" title="google_signin" src="https://developers.google.com/identity/images/g-logo.png" className="logo" />
              Sign in with Google
        </button>


      </div>
    </div>
  );
};
export default SignIn;
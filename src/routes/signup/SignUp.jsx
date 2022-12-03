import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import c from "./SignUp.module.css"

const SignUp = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("")
  const[possibleError,setPossibleError] = useState("");
  const history = useHistory();

    const createUser = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(response => {
          if(response){
            history.push("/");
            alert("Account successfully created")
          }
        })
        .catch(err => setPossibleError(err.message))
    }

   

  return (
    <div>
      <div className={c.signup__wrapper}>
        <form onSubmit={createUser} className={c.form}>
          <h3>Create Your account</h3>
          <input
            placeholder='Email'
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            />
          <input
            placeholder='Password'
            type="password"
            required
            minLength={8}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
          <button type="submit">Create my account</button>
          <Link className={c.link} to="/login">Already have an account?</Link><br /><br />
          {possibleError && <p style={{ color: "red" }}>{possibleError}</p>}
          
        </form>
      </div>

    </div>
  );
}

export default SignUp
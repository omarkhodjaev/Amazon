import { useState } from 'react'
import { auth } from '../../firebase/config';
import { Link } from 'react-router-dom';

const Login = () => {
  document.title = "Login"

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(response => console.log(response))
    .catch(err => console.log(err.message))
  }

  return (
    <div>
        <Link to={"/"}>HOME</Link>
        <form onSubmit={loginUser}>
            <input type="email" required onChange={e => {setEmail(e.target.value)}} />
            <input type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
import { useState } from 'react'
import { auth , provider} from '../../firebase/config';
import { Link } from 'react-router-dom';
import c from "./Login.module.css";
import { useHistory } from 'react-router-dom';


const Login = () => {
  document.title = "Login"

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[possibleError,setPossibleError] = useState("");
  const history = useHistory();


  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(response => {
      if(response){
        history.push("/")
        alert("Account Succesfully Login")
      }
    })
    
    .catch(err => setPossibleError(err.message))
  }

  const signwithgoogle = () => {
    auth.signInWithPopup(provider)
    .then(response => {
      if(response){
        history.push("/")
        alert("Account Succesfully Login")
      }
    })
    .catch(err => setPossibleError(err.message))
  }

  return (
    <div>
        <div className={c.signup__wrapper}>
          <Link to={"/"}>HOME</Link>
          <form onSubmit={loginUser} className={c.form}>
              <h3>Login Your account</h3>
              <input placeholder='Email' type="email" required onChange={e => {setEmail(e.target.value)}} />
              <input placeholder='Password' type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}} />
              <button className={c.login} type='submit'>Login</button>
              <button className={c.loginwithgoogle} onClick={signwithgoogle}>Sign in with Google</button>
              {possibleError && <p style={{ color: "red" }}>{possibleError}</p>}
          </form>
          
        </div>
    </div>
  )
}

export default Login
import { Route } from 'react-router-dom';
import './App.css';
import Home from "./routes/home/Home.jsx"
import Login from './routes/login/Login';


function App() {
  return (
    <div>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </div>
  );
}

export default App;

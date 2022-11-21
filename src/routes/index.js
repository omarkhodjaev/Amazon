import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';

const index = () => {
  return (
    <>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </>
  )
}

export default index
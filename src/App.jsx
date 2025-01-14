import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './login_com/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} /> 
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} /> 
    </>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;

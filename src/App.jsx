import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './login_com/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} /> 
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Statistics" element={<Statistics />} />
      <Route path="/Settings" element={<Settings />} />
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

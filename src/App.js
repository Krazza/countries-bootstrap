import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import CountriesSingle from './components/CountriesSingle'
import Favourites from "./components/Favourites"
import Home from './components/Home';
import Layout from './pages/Layout';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Login } from './components/Login';
import { Register } from './components/Register';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./auth/firebase";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import "../src/App.css"


const App = () => {

  const [user] = useAuthState(auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>          

          <Route element={<ProtectedRoute user={user}/>}>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:single" element={<CountriesSingle />} />
            <Route path="/favourites" element={<Favourites />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

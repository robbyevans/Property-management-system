import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landingpage from './components/LandingPage/Landingpage';
import Home from './components/Home';
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Footer from "./components/Footer"
import './App.css';

function App() {

  const [user,setUser] = useState(null);

  //auto-login
  useEffect(()=>{
  fetch ("/me").then((r)=>{
    if(r.ok){
      r.json().then((user)=>setUser(user));
    }
  });
  },[]);

// if (!user) return <Login setUser={setUser} />;

  return (
    <>
    <Router>
      <Navbar user={user} setUser={setUser}/>

      {user?(

      <Routes>
        <Route path="/" exact element={<Landingpage  user={user} setUser={setUser}/>}></Route>
        <Route path="/Analytics" element={<Home user={user}/>}></Route>
      </Routes>
      ):(
      <Routes>
        <Route path="/Login" element={<Login setUser={setUser}/>}>
        </Route>
        <Route path="/Signup" element={<Signup setUser={setUser}/>}>
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}>
        </Route>
      </Routes>

      )}
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;

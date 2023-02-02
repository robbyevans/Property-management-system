import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Footer from "./components/Footer"
import Sidebar from "./components/Navbar/Sidebar";
import Analytics from "./components/Pages/Analytics";
import Dashboard from "./components/Pages/Dashboard";
import Marketing from "./components/Pages/Marketing";
import Tenants from "./components/Pages/Tenants";
import ProductList from "./components/Pages/ProductList";
import Finances from "./components/Pages/Finances"
import Rentals from "./components/Pages/Rentals";
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
        <Routes>
          <Route path="/Login" element={<Login setUser={setUser}/>}>
          </Route>
          <Route path="/Signup" element={<Signup setUser={setUser}/>}>
          </Route>
          {/* <Route path="*" element={<h1>404 NOT FOUND</h1>}>
          </Route> */}
        </Routes>

      <Sidebar user={user} setUser={setUser}>

      {user?
      
      (
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/rentals" element={<Rentals />} />
          
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/productList" element={<ProductList/>} />
        <Route path="/tenants" element={<Tenants/>} />
      </Routes>
      ):(
      null

      )
      
      
      }
      </Sidebar>
      
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;

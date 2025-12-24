import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Login from "./Athentication/Logic"; 
import Register from "./Athentication/Register";

function App() {
  // 1. Dynamic Login Check
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAdmin") === "true");

  useEffect(() => {
    // Check status every time the app renders
    const status = localStorage.getItem("isAdmin") === "true";
    setIsLoggedIn(status);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Toaster position="top-center" reverseOrder={false} />
        
        <Routes>
          {/* --- DASHBOARD ROUTE (No Navbar/Footer for clean look) --- */}
          <Route path="/dashboard" element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
          } />

          {/* --- OTHER ROUTES (With Navbar & Footer) --- */}
          <Route path="*" element={
            <>
              <Navbar />
              <main className="main-content container-fluid p-0" style={{ minHeight: '80vh' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  {/* Default redirect */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
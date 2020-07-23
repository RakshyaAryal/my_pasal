import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Sidebar from "./templates/Sidebar";
import Student from "./modules/Students";

function App() {
  return (
      <div>
          <Header
              siteTitle={"School management system"}
              slogan={"you best solution"}
          />
          <Sidebar/>
        <div>
           <Student/>
        </div>
          <Footer/>
      </div>
  );
}

export default App;

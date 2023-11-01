import React, { useEffect, useState } from "react";
// @ts-ignore
import Logo from "assets/images/logo.svg";
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

function App() {

  return (
    <div className="App">
      <div className="d-flex align-items-center justify-content-center border-bottom-1 border-right-1 border-gray-lighter">
        <img src={Logo} alt="logo" />
      </div>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

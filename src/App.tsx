import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Hat } from "./components/header/hat";
import { Content } from "./components/main/content";
import { Basement } from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
		<Hat />
		<Content />
    </BrowserRouter>
  );
}

export default App;

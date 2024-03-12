import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Basement } from "./components/footer/footer";
import { Content } from "./components/main/content";

function App() {
  return (
    <BrowserRouter>
		<Content />
    </BrowserRouter>
  );
}

export default App;

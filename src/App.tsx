import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Basement } from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
		<div className="App">
			<header className="App-header">
			</header>
			<Basement />
		</div>
    </BrowserRouter>
    
  );
}

export default App;

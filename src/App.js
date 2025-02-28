import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Header2 from "./Header2";
import Part1 from "./Part1";
import Store from "./Store";
import Store2 from "./Store2";
import Store3 from "./Store3";
import TopSection from "./TopSection";
import Product from "./product";
import Popular from "./Popular";
import Part2 from "./Part2";
import Buy from "./Buy";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <div>
        <Header />
        <Header2 />
        <TopSection />
        <Part1 />
        <Store />
        <Store2 />
        <Store3 />        
        </div>} />
        <Route path="/product" element={<Product />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Part2" element={<Part2 />}/>
        <Route path="/Buy" element={<Buy />} />
        
        </Routes>
      
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}

export default App;

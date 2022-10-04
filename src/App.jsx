import React from "react";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom'
import { Layout } from "./components/Layout";
import { About } from "./pages/About/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Create from "./Components/Method/Create";
import Users from "./Components/Pages/Users";
import Edit from "./Components/Method/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/crud-app" element={<Users />} />
        <Route exact path="/Edit/:id" element={<Edit />} />
        <Route exact path="/Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

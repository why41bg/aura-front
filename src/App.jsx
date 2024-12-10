import Home from "./components/Home";
import Console from "./components/Console";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={<Home />}
        />
        <Route
          path="/console"
          element={<Console />}
        />
      </Routes>
    </div>
  );
};

export default App;

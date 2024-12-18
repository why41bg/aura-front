import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Console from "./pages/console/Console";
import SignIn from "./pages/signin/SignIn";

const Router = () => {
  return (
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
      <Route
        path="/signin"
        element={<SignIn />}
      />
    </Routes>
  );
};

export default Router;

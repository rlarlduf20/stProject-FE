import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Layout from "./component/public/layout/Layout";
import Signin from "./page/Signin";
import Register from "./page/Register";
import MyPage from "./page/MyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/user" element={<Home />} />
          <Route path="/user/login" element={<Signin />} />
          <Route path="/user/registration" element={<Register />} />
          <Route path="/user/my" element={<MyPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

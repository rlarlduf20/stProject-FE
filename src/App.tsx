import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page";
import Layout from "./component/public/layout";
import Signin from "./page/Signin";
import Register from "./page/Register";
import MyPage from "./page/MyPage";
import NoticeBoard from "./page/NoticeBoard";
import FreeBoard from "./page/FreeBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/user" element={<Home />} />
          <Route path="/user/login" element={<Signin />} />
          <Route path="/user/registration" element={<Register />} />
          <Route path="/user/my" element={<MyPage />} />
          <Route path="/user/noticeb" element={<NoticeBoard />} />
          <Route path="/user/freeb" element={<FreeBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

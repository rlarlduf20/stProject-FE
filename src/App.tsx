import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page";
import Layout from "./component/public/layout";
import Signin from "./page/Signin";
import Register from "./page/Register";
import MyPage from "./page/MyPage";
import NoticeBoard from "./page/board/NoticeBoard";
import FreeBoard from "./page/board/FreeBoard";
import ReferBoard from "./page/board/ReferBoard";
import ReportBoard from "./page/board/ReportBoard";
import QnABoard from "./page/board/QnABoard";
import ArticleRegi from "./page/board/ArticleRegi";

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
          <Route path="/user/referb" element={<ReferBoard />} />
          <Route path="/user/reportb" element={<ReportBoard />} />
          <Route path="/user/freeb" element={<FreeBoard />} />
          <Route path="/user/qnab" element={<QnABoard />} />
        </Route>
        <Route path="/articleRegi" element={<ArticleRegi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

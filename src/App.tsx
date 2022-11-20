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
import FreeRegi from "./page/board/regi/FreeRegi";
import NoticeRegi from "./page/board/regi/NoticeRegi";
import ReferRegi from "./page/board/regi/ReferRegi";
import ReportRegi from "./page/board/regi/ReportRegi";
import QnARegi from "./page/board/regi/QnARegi";

const App = () => {
  return (
    <BrowserRouter basename="client">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/noticeb" element={<NoticeBoard />} />
          <Route path="/referb" element={<ReferBoard />} />
          <Route path="/reportb" element={<ReportBoard />} />
          <Route path="/freeb" element={<FreeBoard />} />
          <Route path="/qnab" element={<QnABoard />} />
          <Route path="/noticeRegi" element={<NoticeRegi />} />
          <Route path="/referRegi" element={<ReferRegi />} />
          <Route path="/reportRegi" element={<ReportRegi />} />
          <Route path="/freeRegi" element={<FreeRegi />} />
          <Route path="/qnaRegi" element={<QnARegi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import ArticleEdit from "../../../component/main/board/ArticleEdit";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

const NoticeEdit = () => {
  const params = useLocation();
  const [eachNotice, setEachNotice] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getEachNotice = async () => {
    try {
      console.log(params.search.slice(4));
      const res = await useAxios.get(`/notice/${params.search.slice(4)}`);
      console.log(res.data);
      setEachNotice(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getEachNotice();
  }, []);
  return (
    <>
      {loading ? null : (
        <ArticleEdit each={eachNotice} api="notice" ret="noticeb" />
      )}
    </>
  );
};

export default NoticeEdit;

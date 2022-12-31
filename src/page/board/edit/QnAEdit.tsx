import ArticleEdit from "../../../component/main/board/ArticleEdit";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

const QnAEdit = () => {
  const params = useLocation();
  const [eachQna, setEachQna] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getEachQna = async () => {
    try {
      console.log(params.search.slice(4));
      const res = await useAxios.get(`/qna/${params.search.slice(4)}`);
      console.log(res.data);
      setEachQna(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getEachQna();
  }, []);
  return (
    <>{loading ? null : <ArticleEdit each={eachQna} api="qna" ret="qnab" />}</>
  );
};

export default QnAEdit;

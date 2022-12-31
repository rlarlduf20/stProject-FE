import EachArticle from "../../../component/main/board/EachArticle";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const EachQnA = () => {
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
    <>
      {loading ? null : (
        <EachArticle
          each={eachQna}
          type="qna"
          editRoute="/qnaEdit"
          ret="qnab"
        />
      )}
    </>
  );
};

export default EachQnA;

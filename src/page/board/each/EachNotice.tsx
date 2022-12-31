import EachArticle from "../../../component/main/board/EachArticle";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
const EachNotice = () => {
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
        <EachArticle
          each={eachNotice}
          type="notice"
          editRoute="/noticeEdit"
          ret="noticeb"
        />
      )}
    </>
  );
};

export default EachNotice;

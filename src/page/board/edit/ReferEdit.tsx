import ArticleEdit from "../../../component/main/board/ArticleEdit";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

const ReferEdit = () => {
  const params = useLocation();
  const [eachRefer, setEachRefer] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getEachRefer = async () => {
    try {
      console.log(params.search.slice(4));
      const res = await useAxios.get(`/reference/${params.search.slice(4)}`);
      console.log(res.data);
      setEachRefer(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getEachRefer();
  }, []);
  return (
    <>
      {loading ? null : (
        <ArticleEdit each={eachRefer} api="reference" ret="referb" />
      )}
    </>
  );
};

export default ReferEdit;

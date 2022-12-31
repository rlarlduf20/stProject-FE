import ArticleEdit from "../../../component/main/board/ArticleEdit";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

const FreeEdit = () => {
  const params = useLocation();
  const [eachFree, setEachFree] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getEachFree = async () => {
    try {
      console.log(params.search.slice(4));
      const res = await useAxios.get(`/freeboard/${params.search.slice(4)}`);
      console.log(res.data);
      setEachFree(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getEachFree();
  }, []);
  return (
    <>
      {loading ? null : (
        <ArticleEdit each={eachFree} api="freeboard" ret="freeb" />
      )}
    </>
  );
};

export default FreeEdit;

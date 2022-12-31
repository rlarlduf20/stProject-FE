import EachArticle from "../../../component/main/board/EachArticle";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const EachFree = () => {
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
        <EachArticle
          each={eachFree}
          type="freeboard"
          editRoute="/freeEdit"
          ret="freeb"
        />
      )}
    </>
  );
};

export default EachFree;

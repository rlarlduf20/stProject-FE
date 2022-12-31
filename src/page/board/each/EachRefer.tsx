import EachArticle from "../../../component/main/board/EachArticle";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
const EachRefer = () => {
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
        <EachArticle
          each={eachRefer}
          type="reference"
          editRoute="/referEdit"
          ret="referb"
        />
      )}
    </>
  );
};

export default EachRefer;

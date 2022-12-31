import EachArticle from "../../../component/main/board/EachArticle";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const EachReport = () => {
  const params = useLocation();
  const [eachReport, setEachReport] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getEachReport = async () => {
    try {
      console.log(params.search.slice(4));
      const res = await useAxios.get(`/report/${params.search.slice(4)}`);
      console.log(res.data);
      setEachReport(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getEachReport();
  }, []);

  return (
    <>
      {loading ? null : (
        <EachArticle
          each={eachReport}
          type="report"
          editRoute="/reportEdit"
          ret="reportb"
        />
      )}
    </>
  );
};

export default EachReport;

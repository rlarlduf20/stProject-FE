import ArticleEdit from "../../../component/main/board/ArticleEdit";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

const ReportEdit = () => {
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
        <ArticleEdit each={eachReport} api="report" ret="reportb" />
      )}
    </>
  );
};

export default ReportEdit;

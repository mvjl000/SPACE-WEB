import { useParams } from "react-router-dom";

import "./ResultsPage.css";

interface ResultsParams {
  phrase: string;
}

const ResultsPage = () => {
  const { phrase } = useParams<ResultsParams>();

  return (
    <div className="result">
      <h1 className="results__heading">SPACE WEB</h1>
    </div>
  );
};

export default ResultsPage;

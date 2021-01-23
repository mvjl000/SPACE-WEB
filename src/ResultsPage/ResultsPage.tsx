import { useParams } from "react-router-dom";

import "./ResultsPage.css";

interface ResultsParams {
  phrase: string;
}

const ResultsPage = () => {
  const { phrase } = useParams<ResultsParams>();

  return (
    <div>
      <h1>RESULTS {phrase}</h1>
    </div>
  );
};

export default ResultsPage;

import { useParams } from "react-router-dom";
import SearchForm from "../shared/SearchForm/SearchForm";

import "./ResultsPage.css";

interface ResultsParams {
  phrase: string;
}

const ResultsPage = () => {
  const { phrase } = useParams<ResultsParams>();

  return (
    <div className="results">
      <h1 className="results__heading">SPACE WEB</h1>
      <SearchForm
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        optionalClassName="results"
      />
    </div>
  );
};

export default ResultsPage;

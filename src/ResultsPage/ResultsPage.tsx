import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SearchForm from "../shared/SearchForm/SearchForm";

import "./ResultsPage.css";

interface ResultsParams {
  phrase: string;
}

const ResultsPage = () => {
  const { phrase } = useParams<ResultsParams>();

  return (
    <div className="results">
      <motion.h1
        className="results__heading"
        initial={{ y: "300px", fontSize: "60px" }}
        animate={{ y: 0, fontSize: "30px" }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        SPACE WEB
      </motion.h1>
      <SearchForm
        initial={{ opacity: 0, y: "330px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 1, delay: 0.3 }}
        optionalClassName="results"
        searchValue={phrase}
      />
    </div>
  );
};

export default ResultsPage;

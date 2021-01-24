import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { Initial } from "../../types/animations";
import { Animate } from "../../types/animations";
import { Transiton } from "../../types/animations";

import "./SearchForm.css";

interface SearchFormProps {
  initial: Initial;
  animate: Animate;
  transition: Transiton;
  searchValue: string;
  optionalClassName?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  initial,
  animate,
  transition,
  optionalClassName,
  searchValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/results/${inputValue}`);
  };

  return (
    <motion.form
      className={`searchForm${
        optionalClassName ? " searchForm--" + optionalClassName : ""
      }`}
      onSubmit={handleFormSubmition}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <input
        className="searchForm__input"
        type="text"
        placeholder="e.g. Saturn"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </motion.form>
  );
};

export default SearchForm;

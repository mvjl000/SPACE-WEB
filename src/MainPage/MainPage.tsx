import { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import "./MainPage.css";

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/results/${inputValue}`);
  };

  return (
    <section className="spaceweb section--main">
      <div className="spaceweb__contentContainer">
        <motion.h1
          className="spaceweb__heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          SPACE WEB
        </motion.h1>
        <motion.p
          className="spaceweb__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Search through NASA API to explore space. Begin your journey by typing
          something down there
        </motion.p>
        <motion.form
          className="spaceweb__form"
          onSubmit={handleFormSubmition}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <input
            className="spaceweb__input"
            type="text"
            placeholder="eg. Saturn"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </motion.form>
      </div>
    </section>
  );
};

export default MainPage;

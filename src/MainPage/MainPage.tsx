import { motion } from "framer-motion";
import SearchForm from "../shared/SearchForm/SearchForm";
import AboutButton from "../About/AboutButton";
import "./MainPage.css";

const MainPage = () => {
  return (
    <section className="spaceweb section--main">
      <AboutButton />
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
        <SearchForm
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          searchValue=""
        />
      </div>
    </section>
  );
};

export default MainPage;

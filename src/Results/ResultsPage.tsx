import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ImagesArray } from "../types/fetchedImages";
import SearchForm from "../shared/SearchForm/SearchForm";
import SingleImage from "./components/SingleImage";
import AboutButton from "../shared/AboutButton/AboutButton";
import Loader from "../shared/Loader/Loader";

import "./ResultsPage.css";

interface ResultsParams {
  phrase: string;
}

const ResultsPage = () => {
  const [images, setImages] = useState<ImagesArray>([
    { data: [{ title: "" }], links: [{ href: "" }] },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingError, setIsFetchingError] = useState(false);
  const { phrase } = useParams<ResultsParams>();

  useEffect((): void => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://images-api.nasa.gov/search?q=${phrase}&media_type=image`
        );
        setIsLoading(false);
        setImages(response.data.collection.items);
      } catch (err) {
        setIsLoading(false);
        setIsFetchingError(true);
      }
    };
    fetchData();
  }, [phrase]);

  return (
    <div className="results">
      <AboutButton optionalClassName="aboutButton--results" />
      <Link to="/">
        <motion.h1
          className="results__heading"
          initial={{ y: "calc(30vh - 25px)", fontSize: "58px" }}
          animate={{ y: 0, fontSize: "30px" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          SPACE WEB
        </motion.h1>
      </Link>
      <SearchForm
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        optionalClassName="results"
        searchValue={phrase}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          className="results__gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {images.length > 1
            ? images.map(({ links, data }, index) => {
                if (index < 28)
                  return (
                    <SingleImage
                      key={links[0].href}
                      links={links}
                      data={data}
                    />
                  );
                return undefined;
              })
            : !isFetchingError && (
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="errorMessage"
                >
                  No images found, please try other phrase.
                </motion.h2>
              )}
        </motion.div>
      )}
      {!isLoading && isFetchingError && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="errorMessage"
        >
          Some error ocurred during fetching data. Please try again later
        </motion.h2>
      )}
    </div>
  );
};

export default ResultsPage;

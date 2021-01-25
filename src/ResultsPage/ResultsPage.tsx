import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ImagesArray } from "../types/fetchedImages";
import SearchForm from "../shared/SearchForm/SearchForm";
import SingleImage from "./SingleImage";
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
  const { phrase } = useParams<ResultsParams>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://images-api.nasa.gov/search?q=${phrase}&media_type=image`
        );
        setIsLoading(false);
        setImages(response.data.collection.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [phrase]);

  return (
    <div className="results">
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
        <div className="results__gallery">
          {images.length > 1 ? (
            images.map(({ links, data }, index) => {
              if (index < 50) {
                return (
                  <SingleImage key={links[0].href} links={links} data={data} />
                );
              }
              return undefined;
            })
          ) : (
            <h2>No images found</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;

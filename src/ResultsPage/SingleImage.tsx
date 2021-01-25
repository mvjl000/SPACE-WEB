import React, { useState } from "react";
import { FetchedImage } from "../types/fetchedImages";

const SingleImage: React.FC<FetchedImage> = ({ links, data }) => {
  const [showTite, setShowTitle] = useState(false);

  return (
    <div className="results__imageContainer" key={links[0].href}>
      <div
        onClick={() => setShowTitle(!showTite)}
        className={`results__imageCover${
          showTite ? " results__imageCover--active" : ""
        }`}
      >
        <p>{data[0].title}</p>
      </div>
      <img src={links[0].href} alt={links[0].href} loading="lazy" />
    </div>
  );
};

export default SingleImage;

import React from "react";
import { FetchedImage } from "../types/fetchedImages";

const SingleImage: React.FC<FetchedImage> = ({ links, data }) => {
  return (
    <div className="results__imageContainer" key={links[0].href}>
      <img src={links[0].href} alt={links[0].href} />
    </div>
  );
};

export default SingleImage;

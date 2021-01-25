import React from "react";
import { FetchedImage } from "../types/fetchedImages";

const SingleImage: React.FC<FetchedImage> = ({ links, data }) => {
  return (
    <div className="results__imageContainer" key={links[0].href}>
      <div className="results__imageCover">
        <p>{data[0].title}</p>
      </div>
      <img src={links[0].href} alt={links[0].href} />
    </div>
  );
};

export default SingleImage;

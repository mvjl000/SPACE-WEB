import React, { useState } from 'react';
import { FetchedImage } from '../../types/fetchedImages';

import './SingleImage.css';

const SingleImage: React.FC<FetchedImage> = ({ links, data }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      onClick={() => setShowTitle(!showTitle)}
      className='results__imageContainer'
      key={links[0].href}
    >
      <div
        className={`results__imageCover${
          showTitle ? ' results__imageCover--active' : ''
        }`}
      >
        <p>{data[0].title}</p>
      </div>
      <img src={links[0].href} alt={links[0].href} loading='lazy' />
    </div>
  );
};

export default SingleImage;

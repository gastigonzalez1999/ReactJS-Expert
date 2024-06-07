//import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
  // Custom hook that replaces other code
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Loading...</h2>
      }
      <div className='card-grid'>
        {images.map((image) => {
          return <GifItem key={ image.id } image={ image } />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

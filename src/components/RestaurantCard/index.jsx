import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton'
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styled';

export default ({restaurant, onClick}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return(    
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c">Avaliação</ReactStars>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
        onLoad={() => setImageLoaded(true)}
        alt="Foto do Restaurante"
      />
      {!imageLoaded && <Skeleton width='100px' height='100px' />}
    </Restaurant>
  );
};

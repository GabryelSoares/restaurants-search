import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styled';

export default ({ }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c">Avaliação</ReactStars>
      <Address>Rua Rio de Janeiro</Address>
    </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do Restaurante"/>
  </Restaurant>
);

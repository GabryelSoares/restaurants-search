import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, Map, Modal, RestaurantCard } from '../../components';

import { Wrapper, Carousel, Container, Search, Logo, CarouselTitle } from './styled';

const Home = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ query, setQuery ] = useState(null);
  const [ modalOpened, setModalOpened ] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if(e.key === 'Enter'){
      setQuery(inputValue);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do App" />
          <TextField
            label='Pesquisar'
            variant="outlined"
            fullWidth
            value={inputValue}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card 
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                title={restaurant.name}
              />
            ))}
            
          </Carousel>
          <button onClick={()=>setModalOpened(true)}>AbrirModal</button>
        </Search>
        {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant}/>)}
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={()=>{setModalOpened(!modalOpened)}}/> */}
    </Wrapper>
  );
};

export default Home;

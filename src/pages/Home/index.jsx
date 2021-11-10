import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, Modal, RestaurantCard } from '../../components';

import { Wrapper, Carousel, Container, Search, Logo, CarouselTitle, Map } from './styled';

const Home = () => {
  const [ inputValue, setInputValue ] = useState('')
  const [ modalOpened, setModalOpened ] = useState(false)

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
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
            onChange={(e) => setInputValue(e.target.value)}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card key="123" photo={restaurante} title="Nome do restaurante" />
            <Card key="234" photo={restaurante} title="Nome do restaurante" />
            <Card key="456" photo={restaurante} title="Nome do restaurante" />
            <Card key="678" photo={restaurante} title="Nome do restaurante" />
            <Card key="895" photo={restaurante} title="Nome do restaurante" />
            <Card key="35" photo={restaurante} title="Nome do restaurante" />
            <Card key="42" photo={restaurante} title="Nome do restaurante" />
          </Carousel>
          <button onClick={()=>setModalOpened(true)}>AbrirModal</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={()=>{setModalOpened(!modalOpened)}}/>
    </Wrapper>
  );
};

export default Home;

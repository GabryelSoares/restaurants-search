import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/logo.svg';
import { Wrapper, Container, Search, Logo, Map } from './styled';

const Home = () => {
  const [ inputValue, setInputValue ] = useState('')

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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const Container = styled.div`
  position: absolute;
  right: 0;
  margin: 5px;
`;

const Icon = styled(MdFavorite)`
  height: 40px;
  width: auto;
`;

const Favorites = () => {
  return (
    <Container>
      <Icon />
    </Container>
  );
};

export default Favorites;

import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { selectFavorites } from '../features/favorite/favoriteSlice';

const Container = styled.div`
  position: absolute;
  right: 0;
  margin: 5px;
`;

const Icon = styled(MdFavorite)`
  height: 40px;
  width: auto;
`;

const Elements = styled.ul`
  position: absolute;
  right: inherit;
  background-color: #fff;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 0px 10px 0px 10px;
  z-index: 3;
`;

const Element = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 15px 10px;
  border-bottom: 1px solid #aaa;
`;

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <Container>
      <Icon />
      <Elements>
        {favorites.map((data) => (
          <Element key={data.id}>
            <img alt={data.name} src={data.image} />
            <p>{data.name}</p>
          </Element>
        ))}
      </Elements>
    </Container>
  );
};

export default Favorites;

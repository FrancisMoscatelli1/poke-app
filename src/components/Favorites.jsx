import React, { useState } from 'react';
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

const IconFilled = styled(MdFavorite)`
  height: 40px;
  width: auto;
`;

const IconEmpty = styled(MdFavoriteBorder)`
  height: 40px;
  width: auto;
`;

const Elements = styled.ul`
  position: absolute;
  top: 25px;
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

const Image = styled.img`
  height: 70px;
  width: auto;
`;

const Favorites = () => {
  const [visible, serVisible] = useState(false);
  const favorites = useSelector(selectFavorites);
  return (
    <Container>
      {favorites.length === 0 ? (
        <IconEmpty onClick={() => serVisible(!visible)} />
      ) : (
        <IconFilled onClick={() => serVisible(!visible)} />
      )}

      {visible ? (
        <Elements>
          {favorites.length === 0 ? (
            <Elements>
              <Element>
                <p>Empty</p>
              </Element>
            </Elements>
          ) : (
            favorites.map((data) => (
              <Element key={data.number}>
                <Image alt={data.name} src={data.image} />
                <p>{data.name}</p>
              </Element>
            ))
          )}
        </Elements>
      ) : null}
    </Container>
  );
};

export default Favorites;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MdFavoriteBorder, MdFavorite, MdClose } from 'react-icons/md';
import {
  selectFavorites,
  deleteFavorite,
} from '../features/favorite/favoriteSlice';
import { NormalizeFistWord } from '../features/utils';

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
  color: #000;
`;

const Image = styled.img`
  height: 70px;
  width: auto;
`;

const Close = styled(MdClose)`
  height: 20px;
  width: auto;
  color: #ff3939;
  margin: 10px;
  &:hover {
    cursor: pointer;
    color: #ff0000;
  }
`;

const Favorites = () => {
  const [visible, setVisible] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  return (
    <Container>
      {favorites.length === 0 ? (
        <IconEmpty onClick={() => setVisible(!visible)} />
      ) : (
        <IconFilled onClick={() => setVisible(!visible)} />
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
                <p>{NormalizeFistWord(data.name)}</p>
                <Close onClick={() => dispatch(deleteFavorite(data.number))} />
              </Element>
            ))
          )}
        </Elements>
      ) : null}
    </Container>
  );
};

export default Favorites;

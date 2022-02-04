import styled from 'styled-components';

export const Container = styled.div`
  width: 23rem;
  margin: 1rem 2rem;

  position: relative;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    align-self: center;

    &:nth-child(n + 2) {
      margin-top: 2rem;
    }
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemYear = styled.h2`
  font-weight: 400;
`;

export const ItemHeaderEffect = styled.div`
  width: 10rem;
  height: 0.4rem;

  background: linear-gradient(to right, #00b37e, #00b37e 5%, #121214);
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
`;

export const ItemContent = styled.p``;

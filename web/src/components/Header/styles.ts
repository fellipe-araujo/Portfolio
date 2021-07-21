import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-bottom: 0.1rem solid #39393a50;
  background-color: #0e1524;

  position: fixed;
  top: 0;
  z-index: 1000;
  align-self: center;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .header-menu {
    display: flex;
    flex-direction: row;
  }

  .header-menu-item:nth-child(n + 2) {
    margin-left: 4rem;
  }

  .header-menu-subtitle {
    font-weight: 400;
    cursor: pointer;
  }

  .header-menu-subtitle:hover {
    transform: scale(1.1);
    color: #9B79FC;
    transition: color 200ms linear;
  }

  @media screen and (max-width: 767px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 840px) {
    .header-menu {
      display: none;
    }
  }

  @media screen and (max-width: 1017px) {
    .header-menu-subtitle {
      font-size: 1.8rem;
    }
  }
`;

const PortfolioLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    margin-right: 2rem;
  }

  @media screen and (max-width: 767px) {
    > h1 {
      font-size: 2.2rem;
    }

    > svg {
      width: 2rem;
      margin-right: 1rem;
    }
  }
`;

export { HeaderContainer, PortfolioLogo };

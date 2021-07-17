import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-top: 0.1rem solid #39393A50;
  background-color: #0e1524;

  position: absolute;
  bottom: 0;
  align-self: center;
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .footer-contact-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .footer-contact-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .footer-contact-box:nth-child(2) {
    margin-left: 4rem;
  }

  .footer-contact-text {
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 767px) {
    .footer-contact-box:nth-child(2) {
      margin-top: 1rem;
    }

    .footer-contact-text {
      font-size: 1.6rem;
    }

    .footer-contact-container {
      flex-direction: column;
    }

    .footer-social-medias-container {
      display: none;
    }
  }
`;

export { FooterContainer };

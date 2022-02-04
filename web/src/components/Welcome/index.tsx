import ProfileImg from '../../assets/profile2.png';

import {
  Container,
  WelcomeWrapper,
  WelcomeText,
  WelcomeTitle,
  WelcomeOccupation,
  ProfileBox,
  Image,
} from './styles';

const Welcome = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <WelcomeText>SEJA BEM-VINDO!</WelcomeText>
        <WelcomeTitle>
          Prazer, eu sou o<br />
          Fellipe Araujo &#129490;
        </WelcomeTitle>
        <WelcomeOccupation>Desenvolvedor de Software</WelcomeOccupation>
      </WelcomeWrapper>

      <ProfileBox>
        <Image src={ProfileImg} alt="Profile Image" />
      </ProfileBox>
    </Container>
  );
};

export default Welcome;

import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { useTheme } from 'styled-components';


import SocialMedias from '../../components/SocialMedias';

import {
  Container,
  ContactContent,
  ContactBox,
  ContactText,
  SocialMediasContent,
} from './styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Container>
      <ContactContent>
        <ContactBox>
          <FaPhoneAlt size={20} color={theme.colors.main} />
          <ContactText>(61) 99142-6597</ContactText>
        </ContactBox>

        <ContactBox>
          <MdMail size={20} color={theme.colors.main} />
          <ContactText>fellipe.eng.soft@gmail.com</ContactText>
        </ContactBox>
      </ContactContent>

      <SocialMediasContent>
        <SocialMedias />
      </SocialMediasContent>
    </Container>
  );
};

export default Footer;

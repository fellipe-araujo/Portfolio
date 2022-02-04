import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { Container, SocialMediaLink } from './styles';

const SocialMedias = () => {
  return (
    <Container>
      <SocialMediaLink
        href="https://github.com/fellipe-araujo"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub size={24} />
      </SocialMediaLink>

      <SocialMediaLink
        href="https://www.linkedin.com/in/fellipearaujo/"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin size={24} />
      </SocialMediaLink>

      <SocialMediaLink
        href="https://www.instagram.com/_codemore/"
        rel="noreferrer"
        target="_blank"
      >
        <FaInstagram size={24} />
      </SocialMediaLink>
    </Container>
  );
};

export default SocialMedias;

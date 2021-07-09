import { SocialMediasContainer } from './styles';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMedias = () => {
  return (
    <SocialMediasContainer>
      <a
        className="reach-me-icon"
        href="https://github.com/fellipe-araujo"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub size={24} />
      </a>

      <a
        className="reach-me-icon"
        href="https://www.linkedin.com/in/fellipearaujo/"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin className="reach-me-icon" size={24} />
      </a>

      <a
        className="reach-me-icon"
        href="https://www.instagram.com/_codemore/"
        rel="noreferrer"
        target="_blank"
      >
        <FaInstagram className="reach-me-icon" size={24} />
      </a>
    </SocialMediasContainer>
  );
};

export default SocialMedias;

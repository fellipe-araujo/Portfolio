import { FooterContainer } from './styles';
import { FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import SocialMedias from '../../components/SocialMedias';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-contact-container">
        <div className="footer-contact-box">
          <FaPhoneAlt size={24} />
          <h2 className="footer-contact-text">(61) 99142-6597</h2>
        </div>

        <div className="footer-contact-box">
          <MdMail size={24} />
          <h2 className="footer-contact-text">fellipe.eng.soft@gmail.com</h2>
        </div>
      </div>

      <SocialMedias />
    </FooterContainer>
  )
}

export default Footer;

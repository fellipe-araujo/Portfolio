import { FooterContainer } from './styles';
import { FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import SocialMedias from '../../components/SocialMedias';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-contact-container">
        <div className="footer-contact-box">
          <FaPhoneAlt size={20} />
          <h2 className="footer-contact-text">(61) 99142-6597</h2>
        </div>

        <div className="footer-contact-box">
          <MdMail size={20} />
          <h2 className="footer-contact-text">fellipe.eng.soft@gmail.com</h2>
        </div>
      </div>

      <div className="footer-social-medias-container">
        <SocialMedias />
      </div>
    </FooterContainer>
  )
}

export default Footer;

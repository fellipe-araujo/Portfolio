import { HeaderContainer, PortfolioLogo } from './styles';
import { Link } from 'react-scroll';
import { VscRootFolderOpened } from 'react-icons/vsc';
import SocialMedias from '../../components/SocialMedias';

const Header = () => {
  return (
    <HeaderContainer>
      <PortfolioLogo>
        <VscRootFolderOpened size={24} />
        <h1>Portfolio</h1>
      </PortfolioLogo>

      <div className="header-menu">
        <Link
          className="header-menu-item"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <h2 className="header-menu-subtitle">Projetos</h2>
        </Link>

        <Link
          className="header-menu-item"
          to="techs"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <h2 className="header-menu-subtitle">Tecnologias</h2>
        </Link>

        <Link
          className="header-menu-item"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <h2 className="header-menu-subtitle">Sobre mim</h2>
        </Link>

        <Link
          className="header-menu-item"
          to="achievements"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <h2 className="header-menu-subtitle">Conquistas</h2>
        </Link>
      </div>

      <SocialMedias />
    </HeaderContainer>
  );
};

export default Header;

import { Link } from 'react-scroll';
import { VscRootFolderOpened } from 'react-icons/vsc';

import SocialMedias from '../../components/SocialMedias';

import {
  Container,
  PortfolioLogo,
  Title,
  HeaderMenu,
  HeaderMenuTitle,
} from './styles';

const Header = () => {
  return (
    <Container>
      <PortfolioLogo>
        <VscRootFolderOpened size={24} />
        <Title>Portfolio</Title>
      </PortfolioLogo>

      <HeaderMenu>
        <Link
          className="header-menu-item"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <HeaderMenuTitle>Projetos</HeaderMenuTitle>
        </Link>

        <Link
          className="header-menu-item"
          to="techs"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <HeaderMenuTitle>Tecnologias</HeaderMenuTitle>
        </Link>

        <Link
          className="header-menu-item"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <HeaderMenuTitle>Sobre mim</HeaderMenuTitle>
        </Link>

        <Link
          className="header-menu-item"
          to="achievements"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <HeaderMenuTitle>Conquistas</HeaderMenuTitle>
        </Link>
      </HeaderMenu>

      <SocialMedias />
    </Container>
  );
};

export default Header;

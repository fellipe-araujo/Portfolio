import {
  HomeContainer,
  HomeTitle,
  HomeSubtitle,
  HomeProjectsList,
  HomeTechnologies,
  HomeAboutMe,
  HomeAchievements,
} from './styles';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si';
import Slider from 'react-slick';
import ProjectCard from '../../components/ProjectCard';
import TimelineItem from '../../components/TimelineItem';
import AchievementsCard from '../../components/AchievementsCard';
import Separator from '../../components/Separator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projects } from '../../database/projects';
import Person from '../../assets/person.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsProjects } from '../../utils/CarouselConfig';

const Home = () => {
  return (
    <HomeContainer>
      <Header />

      {/* <HomeTitle>Welcome To</HomeTitle>
      <HomeSubtitle>My Personal Portfolio</HomeSubtitle> */}

      <Separator />

      <HomeTitle id="projects">Projetos</HomeTitle>
      <HomeProjectsList>
        <Slider {...settingsProjects}>
          {projects.map((item) => (
            <Link
              key={item.id}
              className="home-project-link"
              to={`/project/${item.id}`}
            >
              <ProjectCard
                id={item.id}
                title={item.title}
                coverImage={`projects/${item.coverImage}.png`}
                stacks={item.stacks}
                description={item.description}
                descriptionLength={item.description.length}
                platform={item.platform}
              />
            </Link>
          ))}
        </Slider>
      </HomeProjectsList>

      <Separator />

      <HomeTitle id="techs">Tecnologias</HomeTitle>
      <HomeTechnologies>
        <div className="home-techs-box">
          <div>
            <FaReact
              className="home-techs-box-icon"
              size={20}
              color="#61DAFB"
            />
            <FaReact
              className="home-techs-box-icon"
              size={20}
              color="#9B79FC"
            />
          </div>
          <h2 className="home-techs-box-title">Front-end</h2>
          <p className="home-techs-box-decription">
            Experiência com as stacks: React.js e React Native.
          </p>
        </div>

        <div className="home-techs-box">
          <div>
            <DiMongodb
              className="home-techs-box-icon"
              size={20}
              color="#478E4E"
            />
            <FaNodeJs
              className="home-techs-box-icon"
              size={20}
              color="#51A15E"
            />
            <SiPostgresql
              className="home-techs-box-icon"
              size={20}
              color="#316192"
            />
          </div>
          <h2 className="home-techs-box-title">Back-end</h2>
          <p className="home-techs-box-decription">
            Experiência com Node.js, MongoDB, PostgreSQL, Firebase.
          </p>
        </div>

        <div className="home-techs-box">
          <div>
            <FaFigma
              className="home-techs-box-icon"
              size={20}
              color="#EF6C5E"
            />
          </div>
          <h2 className="home-techs-box-title">UI/UX</h2>
          <p className="home-techs-box-decription">
            Experiência com criação de designs e ferramentas para a criação dos
            mesmos, como o Figma.
          </p>
        </div>
      </HomeTechnologies>

      <Separator />

      <HomeTitle id="about">Sobre mim</HomeTitle>
      <HomeAboutMe>
        <div className="home-about-me-header">
          <img className="home-about-me-image" src={Person} alt="My profile" />
          <p className="home-about-me-text">
            Sou graduando em Engenharia de Software na Universidade de Brasília
            e apaixonado por desenvolvimento web e mobile. Na minha jornada,
            sempre levo comigo uma frase que resume o meu propósito como
            desenvolvedor: "Transformar o mundo e fornecer novas experiências às
            pessoas através da programação."
          </p>
        </div>

        <div className="home-about-me-timeline">
          <TimelineItem year="2018">
            <p className="home-about-me-timeline-item">
              &bull; Iniciei minha graduação em Engenharia de Software
            </p>
          </TimelineItem>

          <TimelineItem year="2019">
            <p className="home-about-me-timeline-item">
              &bull; Trainee - Empresa Júnior de Engenharia de Software
              (Orc'estra Gamificação)
            </p>
          </TimelineItem>

          <TimelineItem year="2020">
            <p className="home-about-me-timeline-item">
              &bull; Assessor de Projetos e Coordenador de Negociações - Empresa
              Júnior de Engenharia de Software (Orc'estra Gamificação)
            </p>
          </TimelineItem>

          <TimelineItem year="2021">
            <p className="home-about-me-timeline-item">
              &bull; Fundador da CodeMore
            </p>
            <p className="home-about-me-timeline-item">
              &bull; Igniter na Rocketseat - Trilha React Native
            </p>
          </TimelineItem>
        </div>
      </HomeAboutMe>

      <Separator />

      <HomeTitle id="achievements">Realizações pessoais</HomeTitle>
      <HomeAchievements>
        <AchievementsCard title="20+" description="Projetos open source" />
        <AchievementsCard title="2000+" description="Seguidores InstaCode" />
        <AchievementsCard title="8+" description="Deploys de aplicações" />
      </HomeAchievements>

      <Footer />
    </HomeContainer>
  );
};

export default Home;

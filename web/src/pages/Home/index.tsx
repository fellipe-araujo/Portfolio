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
import ProjectCard from '../../components/ProjectCard';
import TimelineItem from '../../components/TimelineItem';
import AchievementsCard from '../../components/AchievementsCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projects } from '../../database/projects';
import Person from '../../assets/person.svg';

const Home = () => {
  return (
    <HomeContainer>
      <Header />

      <HomeTitle>Welcome To</HomeTitle>
      <HomeSubtitle>My Personal Portfolio</HomeSubtitle>

      <div className="home-separator" />

      <HomeTitle id="projects">Projects</HomeTitle>
      <HomeProjectsList>
        {projects.web.map((project) => (
          <Link
            key={project.id}
            className="home-project-link"
            to={`/project/${project.id}`}
          >
            <ProjectCard
              title={project.title}
              image={`projects/${project.coverImage}.png`}
              stacks={project.stacks}
              description={project.description}
              descriptionLength={project.description.length}
              platform={project.platform}
            />
          </Link>
        ))}
      </HomeProjectsList>

      <div className="home-separator" />

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

      <div className="home-separator" />

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

      <div className="home-separator" />

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

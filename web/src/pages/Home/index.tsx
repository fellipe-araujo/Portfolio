import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaFigma, FaArrowRight } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si';
import { useTheme } from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProjectCard from '../../components/ProjectCard';
import TimelineItem from '../../components/TimelineItem';
import AchievementsCard from '../../components/AchievementsCard';
import Separator from '../../components/Separator';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';

import { projects } from '../../database/projects';
import Person from '../../assets/person.svg';
import { settingsProjects } from '../../utils/CarouselConfig';

import {
  Container,
  SectionTitle,
  ProjectsList,
  Technologies,
  TechnologiesBox,
  TechnologiesSectionTitle,
  TechnologiesSectionDescription,
  AboutMe,
  AboutMeHeader,
  AboutMeImage,
  AboutMeDescription,
  AboutMeTimeline,
  AboutMeTimelineItem,
  Achievements,
} from './styles';

const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header />

      <Welcome />

      <Separator />

      <SectionTitle id="projects">Projetos</SectionTitle>
      <ProjectsList>
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
      </ProjectsList>

      <Separator />

      <SectionTitle id="techs">Tecnologias</SectionTitle>
      <Technologies>
        <TechnologiesBox>
          <>
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
          </>

          <TechnologiesSectionTitle>Front-end</TechnologiesSectionTitle>
          <TechnologiesSectionDescription>
            Experiência com as tecnologias: React.js e React Native.
          </TechnologiesSectionDescription>
        </TechnologiesBox>

        <TechnologiesBox>
          <>
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
          </>
          <TechnologiesSectionTitle>Back-end</TechnologiesSectionTitle>
          <TechnologiesSectionDescription>
            Experiência com Node.js, MongoDB, PostgreSQL, Firebase.
          </TechnologiesSectionDescription>
        </TechnologiesBox>

        <TechnologiesBox>
          <FaFigma className="home-techs-box-icon" size={20} color="#EF6C5E" />

          <TechnologiesSectionTitle>UI/UX</TechnologiesSectionTitle>
          <TechnologiesSectionDescription>
            Experiência com criação de designs e ferramentas para a criação dos
            mesmos, como o Figma.
          </TechnologiesSectionDescription>
        </TechnologiesBox>
      </Technologies>

      <Separator />

      <SectionTitle id="about">Sobre mim</SectionTitle>
      <AboutMe>
        <AboutMeHeader>
          <AboutMeImage src={Person} alt="My profile" />
          <AboutMeDescription className="home-about-me-text">
            Sou graduando em Engenharia de Software na Universidade de Brasília
            e apaixonado por desenvolvimento web e mobile. Na minha jornada,
            sempre levo comigo uma frase que resume o meu propósito como
            desenvolvedor: "Transformar o mundo e fornecer novas experiências às
            pessoas através da programação."
          </AboutMeDescription>
        </AboutMeHeader>

        <AboutMeTimeline>
          <TimelineItem year="2018">
            <AboutMeTimelineItem>
              <FaArrowRight
                size={20}
                color={theme.colors.main}
                style={{ marginRight: 10 }}
              />
              Iniciei minha graduação em Engenharia de Software
            </AboutMeTimelineItem>
          </TimelineItem>

          <TimelineItem year="2019">
            <AboutMeTimelineItem>
              <FaArrowRight
                size={20}
                color={theme.colors.main}
                style={{ marginRight: 10 }}
              />
              Empresa Júnior de Engenharia de Software (Orc'estra Gamificação)
              <br />
              &emsp; &bull; Trainee
            </AboutMeTimelineItem>
          </TimelineItem>

          <TimelineItem year="2020">
            <AboutMeTimelineItem>
              <FaArrowRight
                size={20}
                color={theme.colors.main}
                style={{ marginRight: 10 }}
              />
              Empresa Júnior de Engenharia de Software (Orc'estra Gamificação)
              <br />
              &emsp; &bull; Assessor de Projetos
              <br />
              &emsp; &bull; Gerente de Projetos
              <br />
              &emsp; &bull; Coordenador de Negociações
            </AboutMeTimelineItem>
          </TimelineItem>

          <TimelineItem year="2021">
            <AboutMeTimelineItem>
              <FaArrowRight
                size={20}
                color={theme.colors.main}
                style={{ marginRight: 10 }}
              />
              Fundador da CodeMore
            </AboutMeTimelineItem>
            <AboutMeTimelineItem>
              <FaArrowRight
                size={20}
                color={theme.colors.main}
                style={{ marginRight: 10 }}
              />
              Igniter na Rocketseat - Trilha React Native
            </AboutMeTimelineItem>
          </TimelineItem>
        </AboutMeTimeline>
      </AboutMe>

      <Separator />

      <SectionTitle id="achievements">Realizações pessoais</SectionTitle>
      <Achievements>
        <AchievementsCard title="30+" description="Projetos open source" />
        <AchievementsCard title="3000+" description="Seguidores InstaCode" />
        <AchievementsCard title="8+" description="Deploys de aplicações" />
      </Achievements>

      <Footer />
    </Container>
  );
};

export default Home;

import {
  HomeContainer,
  HomeTitle,
  HomeSubtitle,
  HomeProjectsList,
} from './styles';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../database/projects';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome To</HomeTitle>
      <HomeSubtitle>My Personal Portfolio</HomeSubtitle>

      <div className="home-separator" />

      <HomeTitle>Projects</HomeTitle>

      <HomeProjectsList>
        {projects.web.map((project) => (
          <ProjectCard
            title={project.title}
            image={`projects/${project.coverImage}.png`}
            stacks={project.stacks}
            description={project.description}
          />
        ))}
      </HomeProjectsList>
    </HomeContainer>
  );
};

export default Home;

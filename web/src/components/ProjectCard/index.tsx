import { ProjectContainer, PlatformTag, ProjectContent } from './styles';
import StackTag from '../StackTag';

interface ProjectCardProps {
  title: string;
  image: string;
  stacks: {
    id: number;
    title: string;
    color: string;
  }[];
  description: string;
  descriptionLength: number;
  platform: string[];
}

const ProjectCard = ({
  title,
  image,
  stacks,
  description,
  descriptionLength,
  platform,
}: ProjectCardProps) => {
  return (
    <ProjectContainer >
      {platform.map((item) => (
        <PlatformTag platform={item === 'web' ? '#61DAFB' : '#9B79FC'}>
          <h2 className="project-card-platform-tag-title">{item}</h2>
        </PlatformTag>
      ))}

      <img className="project-card-image" src={image} alt="Project Logo" />

      <ProjectContent>
        <h2 className="project-card-title">{title}</h2>

        <div className="project-card-description-content">
          <p className="project-card-description-text">{description}</p>
          {descriptionLength >= 240 ? <div className="readmore" /> : null}
        </div>

        <div className="project-card-separator" />

        <div className="project-card-stacks-content">
          {stacks.map((stack) => (
            <StackTag key={stack.id} title={stack.title} color={stack.color} />
          ))}
        </div>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectCard;

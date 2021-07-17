import { ProjectContainer, PlatformTag, ProjectContent } from './styles';
import StackTag from '../StackTag';
import { ProjectProps } from '../../utils/types';

const ProjectCard = ({
  title,
  coverImage,
  stacks,
  description,
  descriptionLength,
  platform,
}: ProjectProps) => {
  return (
    <ProjectContainer>
      {platform.map((item) => (
        <PlatformTag
          key={item.id}
          platform={item.title === 'web' ? '#61DAFB' : '#9B79FC'}
        >
          <h2 className="project-card-platform-tag-title">{item.title}</h2>
        </PlatformTag>
      ))}

      <img className="project-card-image" src={coverImage} alt="Project Logo" />

      <ProjectContent>
        <h2 className="project-card-title">{title}</h2>

        <div className="project-card-description-content">
          <p className="project-card-description-text">{description}</p>
          {descriptionLength! >= 240 ? <div className="readmore" /> : null}
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

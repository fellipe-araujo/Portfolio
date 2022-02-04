import StackTag from '../StackTag';
import { ProjectProps } from '../../utils/types';

import {
  Container,
  PlatformTag,
  PlatformTitle,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescriptionContent,
  ProjectDescriptionText,
  ProjectSeparator,
  ProjectStacksContent,
} from './styles';

const ProjectCard = ({
  title,
  coverImage,
  stacks,
  description,
  descriptionLength,
  platform,
}: ProjectProps) => {
  return (
    <Container>
      {platform.map((item) => (
        <PlatformTag key={item.id}>
          <PlatformTitle>{item.title}</PlatformTitle>
        </PlatformTag>
      ))}

      <ProjectImage src={coverImage} alt="Project Logo" />

      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>

        <ProjectDescriptionContent>
          <ProjectDescriptionText>{description}</ProjectDescriptionText>
          {descriptionLength! >= 160 ? <div className="readmore" /> : null}
        </ProjectDescriptionContent>

        <ProjectSeparator />

        <ProjectStacksContent>
          {stacks.map((stack) => (
            <StackTag key={stack.id} pathName={stack.pathName} />
          ))}
        </ProjectStacksContent>
      </ProjectContent>
    </Container>
  );
};

export default ProjectCard;

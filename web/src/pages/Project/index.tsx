import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import Footer from '../../components/Footer';
import StackTag from '../../components/StackTag';
import Separator from '../../components/Separator';

import { projects } from '../../database/projects';
import { settingsGlobal } from '../../utils/CarouselConfig';
import { ProjectProps } from '../../utils/types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Container,
  ProjectTitle,
  Carousel,
  ProjectImageWeb,
  ProjectImageMobile,
  ProjectSubTitle,
  ProjectDescription,
  ProjectTechs,
  ProjectLink,
} from './styles';

interface ParamsProps {
  id: string;
}

const Project = () => {
  const [project, setProject] = useState<ProjectProps>();

  const params: ParamsProps = useParams();

  useEffect(() => {
    const loadingProject = () => {
      setProject(projects[parseInt(params.id) - 1]);
    };

    loadingProject();
  }, [params.id]);

  return (
    <Container>
      <ProjectTitle>{project?.title}</ProjectTitle>

      <Separator />

      {projects[parseInt(params.id) - 1].platform.some(
        (item) => item.title === 'web'
      ) ? (
        <Carousel>
          <Slider {...settingsGlobal}>
            {project?.images!.web.map((image) => (
              <ProjectImageWeb
                key={image.id}
                src={`/projects/${project.title}/web/${image.pathName}.png`}
                alt={image.pathName}
              />
            ))}
          </Slider>
        </Carousel>
      ) : null}

      {projects[parseInt(params.id) - 1].platform.some(
        (item) => item.title === 'mobile'
      ) ? (
        <Carousel>
          <Slider {...settingsGlobal}>
            {project?.images!.mobile.map((image) => (
              <ProjectImageMobile
                key={image.id}
                src={`/projects/${project.title}/mobile/${image.pathName}.png`}
                alt={image.pathName}
              />
            ))}
          </Slider>
        </Carousel>
      ) : null}

      <Separator />

      <ProjectSubTitle>Sobre</ProjectSubTitle>
      <ProjectDescription>{project?.description}</ProjectDescription>

      <Separator />

      <ProjectSubTitle>Tecnologias utilizadas</ProjectSubTitle>
      <ProjectTechs>
        {project?.stacks.map((stack) => (
          <StackTag key={stack.id} pathName={`/${stack.pathName}`} />
        ))}
      </ProjectTechs>

      <Separator />

      <ProjectSubTitle>Protótipo</ProjectSubTitle>
      <ProjectLink
        href={project?.figma}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project?.title} - Figma
      </ProjectLink>

      <Separator />

      <ProjectSubTitle>Código da aplicação</ProjectSubTitle>
      <ProjectLink
        href={project?.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project?.title} - GitHub
      </ProjectLink>

      <Footer />
    </Container>
  );
};

export default Project;

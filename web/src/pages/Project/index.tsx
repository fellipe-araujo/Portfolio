import { useState, useEffect } from 'react';
import { ProjectContainer, Platform, Carousel } from './styles';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import StackTag from '../../components/StackTag';
import Separator from '../../components/Separator';
import { projects } from '../../database/projects';
import { settingsWeb, settingsMobile } from '../../utils/CarouselConfig';
import { ProjectProps } from '../../utils/types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <ProjectContainer>
      <h1 className="project-title">{project?.title}</h1>

      <Separator />

      {projects[parseInt(params.id) - 1].platform.some(
        (item) => item.title === 'web'
      ) ? (
        <>
          <Platform web>
            <h2 className="project-platform-title">
              web - {project?.images?.web.length} imagens
            </h2>
          </Platform>

          <Carousel web>
            <Slider {...settingsWeb}>
              {project?.images!.web.map((image) => (
                <div key={image.id} className="project-carousel-content">
                  <img
                    className="project-carousel-image-web"
                    src={`/projects/${project.title}/web/${image.pathName}.png`}
                    alt={image.pathName}
                  />
                </div>
              ))}
            </Slider>
          </Carousel>
        </>
      ) : null}

      {projects[parseInt(params.id) - 1].platform.some(
        (item) => item.title === 'mobile'
      ) ? (
        <>
          <Platform mobile>
            <h2 className="project-platform-title">
              mobile - {project?.images?.mobile.length} imagens
            </h2>
          </Platform>

          <Carousel mobile>
            <Slider {...settingsMobile}>
              {project?.images!.mobile.map((image) => (
                <div key={image.id} className="project-carousel-content">
                  <img
                    className="project-carousel-image-mobile"
                    src={`/projects/${project.title}/mobile/${image.pathName}.png`}
                    alt={image.pathName}
                  />
                </div>
              ))}
            </Slider>
          </Carousel>
        </>
      ) : null}

      <Separator />

      <h2 className="project-subtitle">Sobre</h2>
      <p className="project-description">{project?.description}</p>

      <Separator />

      <h2 className="project-subtitle">Tecnologias utilizadas</h2>
      <div className="project-techs">
        {project?.stacks.map((stack) => (
          <StackTag key={stack.id} title={stack.title} color={stack.color} />
        ))}
      </div>

      <Separator />

      <h2 className="project-subtitle">Protótipo</h2>
      <a
        className="project-link"
        href={project?.figma}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project?.title} - Figma
      </a>

      <Separator />

      <h2 className="project-subtitle">Código da aplicação</h2>
      <a
        className="project-link"
        href={project?.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project?.title} - GitHub
      </a>

      <Footer />
    </ProjectContainer>
  );
};

export default Project;

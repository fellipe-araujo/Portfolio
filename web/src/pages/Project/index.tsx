import { ProjectContainer } from './styles';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { projects } from '../../database/projects';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ParamsProps {
  id: string;
}

const Project = () => {
  const params: ParamsProps = useParams();

  const settings = {
    dots: true,
    // centerMode: true,
    // centerPadding: '0px',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ProjectContainer>
      <div className="project-carousel-container">
        <Slider {...settings}>
          {projects.web[parseInt(params.id) - 1].images.map((image) => (
            <div key={image.id} className="project-carousel-content">
              <img
                className="project-carousel-image"
                src={`/projects/Delivery/${image.pathName}`}
                alt={image.pathName}
              />
            </div>
          ))}
        </Slider>
      </div>
    </ProjectContainer>
  );
};

export default Project;

import { MouseEventHandler } from 'react';
import { CustomPagingDots, CustomArrow } from './styles';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import theme from '../../styles/theme';

interface ArrowProps {
  className?: string;
  onClick?: MouseEventHandler;
  color: string;
}

const ArrowPrev = ({ className, onClick, color }: ArrowProps) => {
  return (
    <CustomArrow className={className} onClick={onClick} background={color}>
      <FiChevronLeft size={24} color="#fff" />
    </CustomArrow>
  );
};

const ArrowNext = ({ className, onClick, color }: ArrowProps) => {
  return (
    <CustomArrow className={className} onClick={onClick} background={color}>
      <FiChevronRight size={24} color="#fff" />
    </CustomArrow>
  );
};

export const settingsGlobal = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <CustomPagingDots border={theme.colors.main} />,
  prevArrow: <ArrowPrev color={theme.colors.main} />,
  nextArrow: <ArrowNext color={theme.colors.main} />,
};

export const settingsProjects = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  customPaging: () => <CustomPagingDots border={theme.colors.main} />,
  prevArrow: <ArrowPrev color={theme.colors.main} />,
  nextArrow: <ArrowNext color={theme.colors.main} />,
  responsive: [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

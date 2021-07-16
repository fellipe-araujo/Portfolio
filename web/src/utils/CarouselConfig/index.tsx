import { MouseEventHandler } from 'react';
import { CustomPagingDots, CustomArrow } from './styles';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

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

const settingsGlobal = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const settingsWeb = {
  ...settingsGlobal,
  customPaging: () => (
    <CustomPagingDots border="#61dafb">
      <div className="fdp" />
    </CustomPagingDots>
  ),
  prevArrow: <ArrowPrev color="#61dafb" />,
  nextArrow: <ArrowNext color="#61dafb" />,
};

export const settingsMobile = {
  ...settingsGlobal,
  customPaging: () => <CustomPagingDots border="#9B79FC" />,
  prevArrow: <ArrowPrev color="#9B79FC" />,
  nextArrow: <ArrowNext color="#9B79FC" />,
};

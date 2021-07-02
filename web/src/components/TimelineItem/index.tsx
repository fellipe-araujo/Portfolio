import { ReactNode } from 'react';
import { TimelineItemContainer } from './styles';

interface TimelineItemProps {
  year: string;
  children: ReactNode;
}

const TimelineItem = ({ year, children }: TimelineItemProps) => {
  return (
    <TimelineItemContainer>
      <div className="item-header">
        <h2>{year}</h2>

        <div className="item-header-effect">
          <div className="item-header-effect-circle" />
          <div className="item-header-effect-line" />
        </div>
      </div>

      <div className="item-content">
        {children}
      </div>
    </TimelineItemContainer>
  );
};

export default TimelineItem;

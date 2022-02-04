import { ReactNode } from 'react';
import {
  Container,
  ItemHeader,
  ItemYear,
  ItemHeaderEffect,
  ItemContent,
} from './styles';

interface TimelineItemProps {
  year: string;
  children: ReactNode;
}

const TimelineItem = ({ year, children }: TimelineItemProps) => {
  return (
    <Container>
      <ItemHeader>
        <ItemYear>{year}</ItemYear>

        <ItemHeaderEffect />
      </ItemHeader>

      <ItemContent>{children}</ItemContent>
    </Container>
  );
};

export default TimelineItem;

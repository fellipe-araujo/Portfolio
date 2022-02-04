import { Container, Title, Description } from './styles';

interface AchievementsProps {
  title: string;
  description: string;
}

const AchievementsCard = ({ title, description }: AchievementsProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default AchievementsCard;

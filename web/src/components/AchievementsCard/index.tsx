import { AchievementContainer } from './styles';

interface AchievementsProps {
  title: string;
  description: string;
}

const AchievementsCard = ({ title, description }: AchievementsProps) => {
  return (
    <AchievementContainer>
      <h2 className="achievements-card-title">{title}</h2>
      <p className="achievements-card-description">{description}</p>
    </AchievementContainer>
  );
};

export default AchievementsCard;

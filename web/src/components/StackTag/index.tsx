import { StackTagContainer } from './styles';

interface StackTagProps {
  id?: number;
  title: string;
  color: string;
}

const StackTag = ({ id, title, color }: StackTagProps) => {
  return (
    <StackTagContainer color={color}>
      <h1 className="stack-title">{title}</h1>
    </StackTagContainer>
  );
};

export default StackTag;

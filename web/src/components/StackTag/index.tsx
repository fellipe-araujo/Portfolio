import { StackTagContainer } from './styles';

interface StackTagProps {
  id?: number;
  pathName: string;
}

const StackTag = ({ id, pathName }: StackTagProps) => {
  return <StackTagContainer src={pathName} />;
};

export default StackTag;

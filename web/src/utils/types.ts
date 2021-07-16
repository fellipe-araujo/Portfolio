export interface ProjectProps {
  id: number;
  title: string;
  coverImage: string;
  images?: {
    web: {
      id: number;
      pathName: string;
    }[];
    mobile: {
      id: number;
      pathName: string;
    }[];
  };
  stacks: {
    id: number;
    title: string;
    color: string;
  }[];
  description: string;
  descriptionLength?: number;
  platform: {
    id: number;
    title: string;
  }[];
  figma?: string;
  github?: string;
}

import { Technology } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TechnologyBadgeProps extends Technology {}

const TechnologyBadge = ({ name, color }: TechnologyBadgeProps) => {
  return (
    <div className="flex items-center bg-zinc-900/30 px-4 py-2 rounded-full">
      <span className={`${color} mr-2`}>●</span>
      <span>{name}</span>
    </div>
  );
};

export default TechnologyBadge;
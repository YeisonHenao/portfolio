import { Skill } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SkillCardProps extends Skill {}

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <div className="text-center p-4">
      <h3 className="font-bold mb-2">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="text-gray-300">{item}</p>
      ))}
    </div>
  );
};

export default SkillCard;
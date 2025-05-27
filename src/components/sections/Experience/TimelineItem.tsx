import { Experience } from '../../../types';

interface TimelineItemProps extends Experience {}

const TimelineItem = ({ company, period, description }: TimelineItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-5/12 text-right pr-8">
        <h3 className="font-bold">{company}</h3>
        <p className="text-gray-500">{period}</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
      <div className="w-5/12 pl-8">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
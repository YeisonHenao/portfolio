import { technologies } from '../../../data/technologies';
import TechnologyBadge from './TechnologyBadge';

const Technologies = () => {
  return (
    <section id="tecnologias" className="mt-16">
      <div>
        <h2 className="text-center text-2xl m-8">Tecnologías</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <TechnologyBadge key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
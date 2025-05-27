import { skills } from '../../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section id="que-hago">
      <div className="mt-10">
        <h2 className="text-center text-2xl m-8">¿Qué hago?</h2>
        <p className="text-center max-w-3xl mx-auto leading-relaxed text-lg">
          Me especializo en el desarrollo de soluciones web full-stack,
          creando aplicaciones robustas y escalables. Mi stack tecnológico
          principal incluye:
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
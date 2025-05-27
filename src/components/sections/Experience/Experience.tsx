import { experiences } from '../../../data/experience';
import TimelineItem from './TimelineItem';

const Experience = () => {
  return (
    <section id="experiencia">
      <div className="mt-10">
        <h2 className="text-center text-2xl m-8">Experiencia</h2>
        <p className="text-center max-w-3xl mx-auto leading-relaxed text-lg mb-8">
          Con más de 4 años de experiencia en el desarrollo de software, he
          trabajado en Coopebombas donde he evolucionado desde roles de
          soporte técnico hasta convertirme en desarrollador Full Stack. Mi
          trayectoria demuestra un crecimiento constante y adaptabilidad a
          nuevas tecnologías, especializándome en soluciones empresariales y
          aplicaciones móviles.
        </p>
        <div className="max-w-2xl mx-auto mt-8">
          <div className="relative">
            <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
const Hero = () => {
  return (
    <section id="inicio" className="mt-15">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <img
            className="w-48 h-48 rounded-full object-cover"
            src="/portfolio/yo.jpg"
            alt="Yeison Henao"
          />
          <h1 className="text-6xl font-sans">Yeison Henao</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
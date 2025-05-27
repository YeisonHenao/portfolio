import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <SocialLinks />
        <p className="text-center text-gray-400">
          © 2025 Yeison Henao. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
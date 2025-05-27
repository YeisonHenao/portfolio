const Navigation = () => {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <nav aria-label="Main Navigation">
      <ul className="flex justify-end gap-4 text-white p-4">
        {navItems.map(item => (
          <li key={item.href} className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
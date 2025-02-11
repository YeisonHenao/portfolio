import React from 'react';
import Card from "./components/Card";

function App() {
  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <ul className="flex justify-end gap-4 text-white p-4">
            <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              <a href="#proyectos">Proyectos</a>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="inicio" className="mt-15">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/yo.jpg"
                alt="Yeison Henao"
                className="w-48 h-48 rounded-full object-cover"
              />
              <h1 className="text-6xl font-sans">Yeison Henao</h1>
            </div>
          </div>
        </section>
        <section id="quien-soy">
          <div>
            <h2 className="text-center text-2xl m-8">¿Quien soy?</h2>
            <p className="text-center max-w-3xl mx-auto leading-relaxed text-lg">
              Soy un desarrollador Full Stack con más de 3 años de experiencia, apasionado por crear soluciones digitales innovadoras. 
              Me especializo en tecnologías .NET, Vue.js y desarrollo móvil iOS, combinando habilidades técnicas con un enfoque en la 
              experiencia del usuario. Constantemente me mantengo actualizado con las últimas tendencias en desarrollo web y 
              buenas prácticas de programación.
            </p>
          </div>
        </section>
        <section id="que-hago">
          <div className="mt-10">
            <h2 className="text-center text-2xl m-8">¿Qué hago?</h2>
            <p className="text-center max-w-3xl mx-auto leading-relaxed text-lg">
              Me especializo en el desarrollo de soluciones web full-stack, creando aplicaciones 
              robustas y escalables. Mi stack tecnológico principal incluye:
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-6 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-gray-300">React • Vue.js • TypeScript</p>
                <p className="text-gray-300">Next.js • Tailwind CSS</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-gray-300">.NET Core • Node.js</p>
                <p className="text-gray-300">SQL Server</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-bold mb-2">Móvil</h3>
                <p className="text-gray-300">iOS Nativo • Swift</p>
                <p className="text-gray-300">SwiftUI • UIKit</p>
              </div>
            </div>
          </div>
        </section>
        <section id="experiencia">
          <div className="mt-10">
            <h2 className="text-center text-2xl m-8">Experiencia</h2>
            <p className="text-center max-w-3xl mx-auto leading-relaxed text-lg mb-8">
              Con más de 3 años de experiencia en el desarrollo de software, he trabajado en Coopebombas
              donde he evolucionado desde roles de soporte técnico hasta convertirme en desarrollador Full Stack.
              Mi trayectoria demuestra un crecimiento constante y adaptabilidad a nuevas tecnologías,
              especializándome en soluciones empresariales y aplicaciones móviles.
            </p>
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <h3 className="font-bold">Coopebombas</h3>
                      <p className="text-gray-500">2022 - Actualidad</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-5/12 pl-8">
                      <p>
                        Desarrollador Full Stack especializado en tecnologías .NET y desarrollo frontend moderno.
                        Experiencia en la creación de aplicaciones web usando Vue.js y optimización con jQuery.
                        También desarrollo aplicaciones móviles iOS nativas utilizando Swift y SwiftUI,
                        enfocándome en crear experiencias de usuario intuitivas y eficientes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <h3 className="font-bold">Coopebombas</h3>
                      <p className="text-gray-500">2020 - 2022 </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-5/12 pl-8">
                      <p className="mt-2 text-sm text-gray-600">
                        Lideré iniciativas de control de calidad y brindé soporte técnico especializado a clientes corporativos. Implementé mejoras en procesos que resultaron en una reducción del 30% en tiempo de respuesta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-20 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/YourGithub" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/YourLinkedin" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/YourTwitter" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          <p className="text-center text-gray-400">© 2025 Yeison Henao. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

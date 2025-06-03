import React from 'react';
import Button from './Button';

const projects = [
  {
    image: "https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg",
    title: "Apoio aos Idosos",
    description: "Programa de assistência e companhia para idosos da comunidade.",
    volunteer: {
      name: "Maria Silva",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
      testimonial: "Foi uma experiência incrível poder ajudar e aprender com nossos idosos."
    }
  },
  {
    image: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg",
    title: "Horta Comunitária",
    description: "Projeto de cultivo de alimentos orgânicos para a comunidade.",
    volunteer: {
      name: "João Santos",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      testimonial: "Ver o projeto crescer e beneficiar tantas famílias é muito gratificante."
    }
  },
  {
    image: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg",
    title: "Educação Digital",
    description: "Aulas de tecnologia para pessoas da terceira idade.",
    volunteer: {
      name: "Ana Costa",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      testimonial: "Ajudar os idosos a se conectarem com o mundo digital é muito especial."
    }
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-[#004643] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#ffffff] text-4xl font-bold mb-4">
            <span className="text-[#f9bc60]">P</span>rojetos Realizados
          </h2>
          <p className="text-[#abd1c6] text-xl max-w-3xl mx-auto">
            Conheça algumas das iniciativas que já realizamos e as histórias de quem participou
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#004643] rounded-lg overflow-hidden border border-[#abd1c6]/20"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[#ffffff] text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-[#abd1c6] mb-6">
                  {project.description}
                </p>
                <div className="border-t border-[#abd1c6]/20 pt-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={project.volunteer.image}
                      alt={project.volunteer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-[#ffffff] font-medium">
                        {project.volunteer.name}
                      </h4>
                      <p className="text-[#abd1c6] text-sm">
                        {project.volunteer.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Button from './Button';
import { MessageSquare, Users } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#004643] pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#004643] border border-[#abd1c6]/20 rounded-lg overflow-hidden">
          {/* Cabeçalho do perfil */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#f9bc60]"
              />
              <div className="flex-1">
                <h2 className="text-[#ffffff] text-2xl font-bold mb-2">Maria Silva</h2>
                <p className="text-[#abd1c6] mb-4">São Paulo, SP</p>
                <p className="text-[#abd1c6]">
                  Voluntária dedicada a ajudar idosos com tecnologia e fazer a diferença na comunidade.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Mensagem
                </Button>
                <Button className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Seguir
                </Button>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className="border-t border-[#abd1c6]/20 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-[#ffffff] text-2xl font-bold">90</p>
                <p className="text-[#abd1c6]">Tarefas Pedidas</p>
              </div>
              <div>
                <p className="text-[#ffffff] text-2xl font-bold">120</p>
                <p className="text-[#abd1c6]">Tarefas Realizadas</p>
              </div>
              <div>
                <p className="text-[#ffffff] text-2xl font-bold">45</p>
                <p className="text-[#abd1c6]">Seguidores</p>
              </div>
              <div>
                <p className="text-[#ffffff] text-2xl font-bold">30</p>
                <p className="text-[#abd1c6]">Seguindo</p>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="border-t border-[#abd1c6]/20 p-6">
            <div className="flex gap-4">
              <Button variant="secondary" className="flex-1">Pedidos</Button>
              <Button variant="secondary" className="flex-1">Projetos Realizados</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
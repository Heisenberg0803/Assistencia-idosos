import React, { useState } from 'react';
import Button from './Button';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    userType: 'volunteer', 
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#004643] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#004643] border border-[#abd1c6]/20 rounded-lg p-8 shadow-lg">
        <h2 className="text-[#ffffff] text-3xl font-bold mb-6 text-center">Cadastro</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#abd1c6] mb-2">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <div>
            <label htmlFor="cpf" className="block text-[#abd1c6] mb-2">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#abd1c6] mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-[#abd1c6] mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <div>
            <label htmlFor="userType" className="block text-[#abd1c6] mb-2">Tipo de Usuário</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            >
              <option value="volunteer">Voluntário</option>
              <option value="assisted">Voluntariado</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-[#abd1c6] mb-2">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <Button className="w-full">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
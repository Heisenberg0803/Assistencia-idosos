import React, { useState } from 'react';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    navigate('/profile'); 
  };

  return (
    <div className="min-h-screen bg-[#004643] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#004643] border border-[#abd1c6]/20 rounded-lg p-8 shadow-lg">
        <h2 className="text-[#ffffff] text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-[#abd1c6] mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-[#abd1c6] mb-2">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] focus:outline-none focus:border-[#f9bc60]"
              required
            />
          </div>
          <Button className="w-full">Entrar</Button>
        </form>
        <p className="mt-4 text-center text-[#abd1c6]">
          Não possui login?{' '}
          <Link to="/register" className="text-[#f9bc60] hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
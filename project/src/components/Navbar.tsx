import React from 'react';
import { Home, Users, Heart, User, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#004643] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="w-8 h-8 text-[#e8e4e6]" />
              <span className="ml-2 text-[#ffffff] text-xl font-semibold">Companhia Dourada</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink to="/" icon={<Home className="w-4 h-4" />} text="Início" />
              <NavLink to="/requests" icon={<Users className="w-4 h-4" />} text="Pedidos" />
              <NavLink to="/benefits" icon={<Gift className="w-4 h-4" />} text="Benefícios" />
              <NavLink to="/login" icon={<User className="w-4 h-4" />} text="Perfil" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center text-[#abd1c6] hover:text-[#ffffff] transition-colors duration-200"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import BenefitsCatalog from './components/BenefitsCatalog';
import RequestList from './components/RequestList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#004643]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Benefits />
              <Projects />
            </>
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/benefits" element={<BenefitsCatalog />} />
          <Route path="/requests" element={<RequestList />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-[#004643]/70 py-8 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-[#abd1c6]">
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4">Sobre Nós</h3>
              <p className="text-sm">Conectando pessoas e construindo uma comunidade mais forte e solidária.</p>
            </div>
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/benefits" className="hover:text-[#f9bc60]">Benefícios</Link></li>
                <li><Link to="/requests" className="hover:text-[#f9bc60]">Pedidos</Link></li>
                <li><Link to="/profile" className="hover:text-[#f9bc60]">Perfil</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li>contato@companhiadourada.com</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4">Newsletter</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-3 py-2 rounded-lg bg-[#004643] border border-[#abd1c6]/20 text-[#ffffff] placeholder-[#abd1c6] flex-1"
                />
                <button className="px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 bg-[#f9bc60] text-[#001e1d] hover:bg-[#f9bc60]/90">
                  →
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
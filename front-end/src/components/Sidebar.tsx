
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Home, DollarSign, MessageSquare, PiggyBank, TrendingUp } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Menu' },
    { path: '/patrimonios', icon: DollarSign, label: 'Meus patrimônios' },
    { path: '/chat', icon: MessageSquare, label: 'Chat' },
    { path: '/investimentos', icon: PiggyBank, label: 'Investimentos' },
    { path: '/holdings', icon: TrendingUp, label: 'Holdings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w1-sidebar w-20 lg:w-64 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-4">
        <Logo withText={true} />
      </div>
      <nav className="flex flex-col flex-1 mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`p-4 flex items-center hover:bg-opacity-10 hover:bg-white transition-all ${
              isActive(item.path) ? 'bg-opacity-10 bg-white' : ''
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-w1-dark rounded-md">
              <item.icon className="text-white" size={20} />
            </div>
            <span className="ml-3 hidden lg:block">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 text-center text-xs text-gray-400 hidden lg:block">
        PK - 2025
        <br />
        Versão 1.0.0
      </div>
    </div>
  );
};

export default Sidebar;

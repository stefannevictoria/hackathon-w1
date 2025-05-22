
import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  toggleMobileSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileSidebar }) => {
  const { logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="w1-header h-16 flex items-center fixed top-0 left-0 right-0 ml-20 lg:ml-64 z-10">
      <div className="flex justify-between items-center w-full px-4">
        <button onClick={toggleMobileSidebar} className="lg:hidden text-white">
          <Menu size={24} />
        </button>
        <div className="ml-auto relative">
          <button
            onClick={toggleUserMenu}
            className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center"
            aria-label="User menu"
          >
            <User size={20} className="text-white" />
          </button>
          
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-w1-dark rounded-md shadow-lg overflow-hidden z-20">
              <div className="py-1">
                <Link
                  to="/perfil"
                  className="block px-4 py-2 text-sm text-white hover:bg-w1-accent"
                  onClick={() => setShowUserMenu(false)}
                >
                  Perfil
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setShowUserMenu(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-w1-accent"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

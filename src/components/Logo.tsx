
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ withText = false, size = 'md' }) => {
  const sizesMap = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-5xl',
  };

  return (
    <Link to="/dashboard" className="flex items-center">
      <div className={`w1-logo font-bold ${sizesMap[size]} text-white`}>
        <span className="font-extrabold">W1</span>
        {withText && (
          <div className={`text-${size === 'lg' ? 'lg' : 'xs'} mt-1`}>
            O caminho das<br />suas conquistas.
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;

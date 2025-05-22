
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-w1-dark mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
        <Link to="/" className="w1-button inline-block">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

import { useLocation } from "react-router-dom";
export default NotFound;

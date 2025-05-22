
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Ativos: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <h1 className="text-3xl font-bold mb-8">HOLDINGS</h1>
      
      <Link to="/novo-ativo">
        <Button 
          className="bg-black text-white hover:bg-gray-900 py-4 px-8 mb-8 flex items-center gap-2"
        >
          <Plus size={20} />
          Adicionar ativo
        </Button>
      </Link>
      
      <div className="relative mb-6">
        <Search className="absolute left-4 top-3 text-gray-500" />
        <Input 
          placeholder="Buscar ativos" 
          className="pl-12 pr-4 py-6 rounded-full" 
        />
      </div>
      
      <div className="border border-gray-300 rounded-lg mb-8">
        {['A', 'B'].map((ativoLetter, index) => (
          <div key={index} className="grid grid-cols-2 border-b border-gray-300 p-4 items-center">
            <div className="flex items-center">
              <div className="bg-gray-400 h-4 w-8 mr-4"></div>
              <span>Ativo {ativoLetter}</span>
            </div>
            <div className="text-right">R${index === 0 ? '400.000' : '200.000'}</div>
          </div>
        ))}
      </div>
      
      {/* Navegação inferior (específica para a seção de Holdings) */}
      <div className="fixed bottom-0 left-20 lg:left-64 right-0 bg-black bg-opacity-90 text-white p-4 rounded-t-xl flex justify-around">
        <Link 
          to="/dashboard"
          className="px-6 py-2 rounded-full"
        >
          Dashboard
        </Link>
        <Link 
          to="/ativos"
          className="px-6 py-2 rounded-full bg-black"
        >
          Ativos
        </Link>
        <Link 
          to="/holdings"
          className="px-6 py-2 rounded-full"
        >
          Holdings
        </Link>
      </div>
    </div>
  );
};

export default Ativos;

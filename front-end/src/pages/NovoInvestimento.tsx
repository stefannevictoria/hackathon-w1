
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NovoInvestimento: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">NOVO INVESTIMENTO</h1>
        <Link to="/investimentos" className="flex items-center gap-2">
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <label htmlFor="nome" className="block mb-2">Nome:</label>
          <Input id="nome" className="w-full rounded-full" />
        </div>
        
        <div>
          <label htmlFor="tipo" className="block mb-2">Tipo:</label>
          <select 
            id="tipo" 
            className="w-full h-10 px-3 rounded-full border border-input bg-background"
          >
            <option value="">Selecione um tipo</option>
            <option value="acoes">Ações</option>
            <option value="fundos">Fundos</option>
            <option value="renda_fixa">Renda Fixa</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <label htmlFor="valor" className="block mb-2">Valor investido:</label>
          <Input id="valor" type="number" className="w-full rounded-full" />
        </div>
        
        <div>
          <label htmlFor="data" className="block mb-2">Data da aquisição:</label>
          <Input id="data" type="date" className="w-full rounded-full" />
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <Button 
          className="bg-black text-white hover:bg-gray-900 px-12 py-6 rounded-full text-lg"
        >
          Salvar
        </Button>
        
        <Link to="/investimentos">
          <Button 
            variant="outline" 
            className="bg-gray-500 text-white hover:bg-gray-600 px-12 py-6 rounded-full text-lg"
          >
            Cancelar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NovoInvestimento;

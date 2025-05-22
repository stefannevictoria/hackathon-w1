
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// Add a custom event for investment creation
const addInvestimentoEvent = new CustomEvent('addInvestimento');

const NovoInvestimento: React.FC = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !tipo || !valor) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Create new investment object
    const novoInvestimento = {
      id: Date.now(),
      nome,
      tipo,
      valor,
      dataAquisicao: data,
    };

    // Store the new investment in localStorage
    const investimentosExistentes = JSON.parse(localStorage.getItem('investimentos') || '[]');
    localStorage.setItem('investimentos', JSON.stringify([...investimentosExistentes, novoInvestimento]));

    // Dispatch event to notify about the new investment
    document.dispatchEvent(addInvestimentoEvent);
    
    toast.success('Investimento adicionado com sucesso!');
    navigate('/investimentos');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">NOVO INVESTIMENTO</h1>
        <Link to="/investimentos" className="flex items-center gap-2">
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label htmlFor="nome" className="block mb-2">Nome:</label>
            <Input 
              id="nome" 
              className="w-full rounded-full"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="tipo" className="block mb-2">Tipo:</label>
            <select 
              id="tipo" 
              className="w-full h-10 px-3 rounded-full border border-input bg-background"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
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
            <Input 
              id="valor" 
              type="number" 
              className="w-full rounded-full"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="data" className="block mb-2">Data da aquisição:</label>
            <Input 
              id="data" 
              type="date" 
              className="w-full rounded-full"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button 
            type="submit"
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
      </form>
    </div>
  );
};

export default NovoInvestimento;

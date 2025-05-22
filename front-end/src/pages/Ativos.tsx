
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Ativo {
  id: number;
  nome: string;
  valor: string;
  tipo: string;
  descricao: string;
}

const Ativos: React.FC = () => {
  const [ativos, setAtivos] = useState<Ativo[]>([
    { id: 1, nome: 'Ativo A', valor: '400.000', tipo: 'Renda Fixa', descricao: '' },
    { id: 2, nome: 'Ativo B', valor: '200.000', tipo: 'Renda Variável', descricao: '' }
  ]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredAtivos, setFilteredAtivos] = useState<Ativo[]>([]);

  // Filter ativos based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredAtivos(ativos);
    } else {
      const filtered = ativos.filter(
        (ativo) => 
          ativo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ativo.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ativo.valor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAtivos(filtered);
    }
  }, [searchTerm, ativos]);

  // Load ativos from localStorage on component mount
  useEffect(() => {
    const loadedAtivos = localStorage.getItem('ativos');
    if (loadedAtivos) {
      setAtivos(JSON.parse(loadedAtivos));
    } else {
      // Initialize localStorage with default ativos
      localStorage.setItem('ativos', JSON.stringify(ativos));
    }

    // Listen for new ativo event
    const handleAddAtivo = () => {
      console.log("New ativo event detected");
      const updatedAtivos = JSON.parse(localStorage.getItem('ativos') || '[]');
      setAtivos(updatedAtivos);
    };

    document.addEventListener('addAtivo', handleAddAtivo);

    // Cleanup event listener
    return () => {
      document.removeEventListener('addAtivo', handleAddAtivo);
    };
  }, []);

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="border border-gray-300 rounded-lg mb-8">
        {filteredAtivos.length > 0 ? (
          filteredAtivos.map((ativo) => (
            <div key={ativo.id} className="grid grid-cols-2 border-b border-gray-300 p-4 items-center">
              <div className="flex items-center">
                <div className="bg-gray-400 h-4 w-8 mr-4"></div>
                <div>
                  <div>{ativo.nome}</div>
                  <div className="text-xs text-gray-500">{ativo.tipo}</div>
                </div>
              </div>
              <div className="text-right">R${ativo.valor}</div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            Nenhum ativo encontrado
          </div>
        )}
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

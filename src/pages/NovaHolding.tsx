
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

// Add a custom event for holding creation
const addHoldingEvent = new CustomEvent('addHolding');

const NovaHolding: React.FC = () => {
  const [nome, setNome] = useState('');
  const [integrantes, setIntegrantes] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ativo1Checked, setAtivo1Checked] = useState(false);
  const [ativo2Checked, setAtivo2Checked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome) {
      toast.error('Por favor, informe um nome para a holding');
      return;
    }

    // Create new holding object
    const novaHolding = {
      id: Date.now(),
      nome,
      integrantes,
      descricao,
      ativos: [
        ...(ativo1Checked ? [{nome: 'Ativo 1'}] : []),
        ...(ativo2Checked ? [{nome: 'Ativo 2'}] : [])
      ]
    };

    // Store the new holding in localStorage
    const holdingsExistentes = JSON.parse(localStorage.getItem('holdings') || '[]');
    localStorage.setItem('holdings', JSON.stringify([...holdingsExistentes, novaHolding]));

    // Dispatch event to notify about the new holding
    document.dispatchEvent(addHoldingEvent);
    
    toast.success('Holding criada com sucesso!');
    navigate('/holdings');
  };

  return (
    <div className="max-w-4xl mx-auto pb-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">CRIAÇÃO DE HOLDING</h1>
        <Link to="/holdings" className="flex items-center gap-2">
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label htmlFor="nome" className="block mb-2">Nome da holding:</label>
            <Input 
              id="nome" 
              className="w-full rounded-full"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="integrantes" className="block mb-2">Integrantes:</label>
            <Input 
              id="integrantes" 
              className="w-full rounded-full"
              value={integrantes}
              onChange={(e) => setIntegrantes(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label htmlFor="descricao" className="block mb-2">Descrição:</label>
            <Textarea 
              id="descricao" 
              className="w-full rounded-lg min-h-[120px]"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block mb-2">Upload de documentos:</label>
            <div className="border border-dashed border-gray-300 rounded-lg min-h-[120px] flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="text-gray-500 text-sm">Insira ou arraste para esse campo</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <label className="block mb-4">Bens a incluir:</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox 
                id="ativo1" 
                className="mr-2" 
                checked={ativo1Checked}
                onCheckedChange={(checked) => setAtivo1Checked(checked === true)}
              />
              <label htmlFor="ativo1">Ativo 1</label>
            </div>
            <div className="flex items-center">
              <Checkbox 
                id="ativo2" 
                className="mr-2"
                checked={ativo2Checked}
                onCheckedChange={(checked) => setAtivo2Checked(checked === true)}
              />
              <label htmlFor="ativo2">Ativo 2</label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            type="submit"
            className="bg-black text-white hover:bg-gray-900 px-8 py-6 rounded-full flex items-center gap-2"
          >
            Criar holding
          </Button>
          
          <Button 
            type="button"
            variant="outline" 
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 rounded-full flex items-center gap-2"
          >
            Compartilhar acesso
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NovaHolding;


import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const NovoPatrimonio: React.FC = () => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorEstimado, setValorEstimado] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate fields
    if (!tipo || !descricao || !valorEstimado) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // In a real application, you would send this data to your backend
    toast.success('Patrimônio adicionado com sucesso!');
    navigate('/patrimonios');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">NOVO PATRIMÔNIO</h1>
        <Link to="/patrimonios" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} className="mr-1" />
          <span>Voltar</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="tipo" className="block text-gray-700 mb-2">Tipo:</label>
            <select 
              id="tipo" 
              value={tipo} 
              onChange={(e) => setTipo(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-3"
              required
            >
              <option value="">Selecione um tipo</option>
              <option value="imovel">Imóvel</option>
              <option value="veiculo">Veículo</option>
              <option value="investimento">Investimento</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="descricao" className="block text-gray-700 mb-2">Descrição:</label>
            <textarea 
              id="descricao" 
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none"
              required
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="documentos" className="block text-gray-700 mb-2">Upload de documentos:</label>
            <div className="border border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center cursor-pointer" onClick={() => document.getElementById('fileInput')?.click()}>
              <Upload size={24} className="mb-2" />
              <p className="text-gray-500 text-center">
                {file ? file.name : 'Insira ou arraste para esse campo'}
              </p>
              <input 
                type="file" 
                id="fileInput"
                className="hidden" 
                onChange={handleFileChange} 
                multiple
              />
            </div>
          </div>

          <div>
            <label htmlFor="valor" className="block text-gray-700 mb-2">Valor estimado:</label>
            <input 
              id="valor" 
              type="text" 
              value={valorEstimado} 
              onChange={(e) => setValorEstimado(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-3"
              placeholder="R$ 0,00"
              required
            />
          </div>

          <div className="flex space-x-4 mt-8">
            <button 
              type="submit" 
              className="w1-button flex-1"
            >
              Salvar
            </button>
            <Link 
              to="/patrimonios" 
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-md flex-1 text-center"
            >
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NovoPatrimonio;

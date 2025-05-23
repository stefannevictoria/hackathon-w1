
import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Add a custom event for patrimonio creation
const addPatrimonioEvent = new CustomEvent('addPatrimonio');

const NovoPatrimonio: React.FC = () => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorEstimado, setValorEstimado] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadedFileNames, setUploadedFileNames] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
      
      // Display file names
      const fileNames = Array.from(e.target.files).map(file => file.name);
      setUploadedFileNames(fileNames);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate fields
    if (!tipo || !descricao || !valorEstimado) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Handle file uploads (in a real app, this would upload to a server)
    let fileData: string[] = [];
    if (files && files.length > 0) {
      fileData = Array.from(files).map(file => file.name);
      toast.info(`${files.length} arquivos serão enviados`);
    }

    // Create new patrimonio object
    const novoPatrimonio = {
      id: Date.now(),
      tipo,
      titulo: `${tipo} - ${valorEstimado}`,
      descricao,
      expanded: false,
      valor: valorEstimado,
      arquivos: fileData
    };

    // Store the new patrimonio in localStorage
    const patrimoniosExistentes = JSON.parse(localStorage.getItem('patrimonios') || '[]');
    localStorage.setItem('patrimonios', JSON.stringify([...patrimoniosExistentes, novoPatrimonio]));

    // Dispatch event to notify about the new patrimonio
    document.dispatchEvent(addPatrimonioEvent);
    
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
            <Label htmlFor="tipo" className="block text-gray-700 mb-2">Tipo:</Label>
            <select 
              id="tipo" 
              value={tipo} 
              onChange={(e) => setTipo(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-3"
              required
            >
              <option value="">Selecione um tipo</option>
              <option value="Imóvel">Imóvel</option>
              <option value="Veículo">Veículo</option>
              <option value="Investimento">Investimento</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <Label htmlFor="descricao" className="block text-gray-700 mb-2">Descrição:</Label>
            <Textarea 
              id="descricao" 
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="documentos" className="block text-gray-700 mb-2">Upload de documentos:</Label>
            <div 
              className="border border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors" 
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <input 
                type="file" 
                id="fileInput"
                className="hidden" 
                onChange={handleFileChange} 
                multiple
              />
              <Upload size={24} className="mb-2" />
              {uploadedFileNames.length > 0 ? (
                <div className="text-gray-500 text-center w-full overflow-y-auto max-h-20">
                  {uploadedFileNames.map((fileName, index) => (
                    <p key={index} className="truncate">{fileName}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center">
                  Insira ou arraste para esse campo
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="valor" className="block text-gray-700 mb-2">Valor estimado:</Label>
            <Input 
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
            <Button 
              type="submit" 
              className="bg-black hover:bg-gray-800 text-white py-6 px-8 rounded-full w-full"
            >
              Salvar
            </Button>
            <Link 
              to="/patrimonios" 
              className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full flex-1 text-center flex items-center justify-center"
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
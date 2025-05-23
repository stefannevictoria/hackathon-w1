
import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/sonner';

interface Ativo {
  id: number;
  nome: string;
  valor: string;
  tipo: string;
  descricao: string;
  arquivos?: string[];
}

const tiposAtivo = [
  "Renda Fixa",
  "Renda Variável",
  "Imóveis",
  "Criptomoedas",
  "Outros"
];

const NovoAtivo: React.FC = () => {
  const navigate = useNavigate();
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadedFileNames, setUploadedFileNames] = useState<string[]>([]);

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

    if (!valor || !tipo) {
      toast.error("Por favor, preencha os campos obrigatórios");
      return;
    }

    // Handle file uploads (in a real app, this would upload to a server)
    let fileData: string[] = [];
    if (files && files.length > 0) {
      fileData = Array.from(files).map(file => file.name);
      toast.info(`${files.length} arquivos serão enviados`);
    }

    // Generate new ID (max ID + 1)
    const existingAtivos = JSON.parse(localStorage.getItem('ativos') || '[]');
    const newId = existingAtivos.length > 0 
      ? Math.max(...existingAtivos.map((a: Ativo) => a.id)) + 1 
      : 1;

    // Create new ativo
    const newAtivo: Ativo = {
      id: newId,
      nome: `Ativo ${String.fromCharCode(64 + newId)}`, // A, B, C, etc.
      valor,
      tipo,
      descricao,
      arquivos: fileData
    };

    // Add to localStorage
    const updatedAtivos = [...existingAtivos, newAtivo];
    localStorage.setItem('ativos', JSON.stringify(updatedAtivos));

    // Dispatch event to notify Ativos component
    const event = new CustomEvent('addAtivo');
    document.dispatchEvent(event);

    // Notify user
    toast.success("Ativo adicionado com sucesso!");

    // Navigate back to ativos list
    navigate('/ativos');
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex items-center mb-6">
        <Link to="/ativos" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold">NOVO ATIVO</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="valor" className="block mb-2">
              Valor investido:
            </Label>
            <Input
              id="valor"
              type="text"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full rounded-full"
              required
            />
          </div>

          <div>
            <Label htmlFor="tipo" className="block mb-2">
              Tipo:
            </Label>
            <Select value={tipo} onValueChange={setTipo} required>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Selecione o tipo de ativo" />
              </SelectTrigger>
              <SelectContent>
                {tiposAtivo.map((tipoAtivo) => (
                  <SelectItem key={tipoAtivo} value={tipoAtivo}>
                    {tipoAtivo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="descricao" className="block mb-2">
              Descrição:
            </Label>
            <Textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full rounded-3xl min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="documentos" className="block mb-2">
              Upload de documentos:
            </Label>
            <div 
              className="border border-gray-300 rounded-3xl p-4 text-center min-h-[100px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => document.getElementById('fileInputAtivo')?.click()}
            >
              <input 
                type="file" 
                id="fileInputAtivo"
                className="hidden" 
                onChange={handleFileChange} 
                multiple
              />
              <Upload className="mb-2" size={24} />
              {uploadedFileNames.length > 0 ? (
                <div className="text-gray-500 text-center w-full overflow-y-auto max-h-20">
                  {uploadedFileNames.map((fileName, index) => (
                    <p key={index} className="truncate">{fileName}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Insira ou arraste para esse campo</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            type="submit"
            className="bg-black text-white hover:bg-opacity-90 py-6 px-8 rounded-full w-64"
          >
            Criar ativo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NovoAtivo;
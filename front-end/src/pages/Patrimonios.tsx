
import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Patrimonio {
  id: number;
  titulo: string;
  descricao: string;
  expanded?: boolean;
}

const Patrimonios: React.FC = () => {
  const [patrimonios, setPatrimonios] = useState<Patrimonio[]>([
    {
      id: 1,
      titulo: 'Patrimônio 1',
      descricao: 'Sed quae quas aut placeat quos aut officia consequatur qui aperiam minima quo accusamus justo et justo impedit. Ut minus aperiam a blanditiis soluta vel aperiam autem.',
      expanded: true
    },
    {
      id: 2,
      titulo: 'Patrimônio 2',
      descricao: 'Sed quae quas aut placeat quos aut officia consequatur qui aperiam minima quo accusamus justo et justo impedit.',
      expanded: false
    },
    {
      id: 3,
      titulo: 'Patrimônio 3',
      descricao: 'Ut minus aperiam a blanditiis soluta vel aperiam autem.',
      expanded: false
    }
  ]);

  const toggleExpand = (id: number) => {
    setPatrimonios(
      patrimonios.map(p => 
        p.id === id ? { ...p, expanded: !p.expanded } : p
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">LISTA DE PATRIMÔNIOS</h1>

      {/* Search bar */}
      <div className="relative mb-8">
        <div className="w-full bg-w1-dark rounded-full overflow-hidden">
          <div className="flex items-center">
            <div className="pl-5">
              <Search className="text-white" size={20} />
            </div>
            <input
              type="text"
              placeholder="Hinted search text"
              className="w-full py-4 px-3 bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Patrimônios list */}
      <div className="space-y-4 mb-16">
        {patrimonios.map(patrimonio => (
          <div 
            key={patrimonio.id} 
            className="bg-w1-dark text-white rounded-lg overflow-hidden"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleExpand(patrimonio.id)}
            >
              <h3 className="text-lg font-medium">{patrimonio.titulo}</h3>
              {patrimonio.expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            {patrimonio.expanded && (
              <div className="p-4 pt-0">
                <p className="text-gray-300">{patrimonio.descricao}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add new patrimonio button - fixed to bottom right */}
      <Link 
        to="/novo-patrimonio" 
        className="fixed bottom-8 right-8 bg-gray-300 hover:bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center text-center shadow-lg"
      >
        <div className="flex flex-col items-center">
          <Plus size={24} />
          <span className="text-xs mt-0.5">Adicionar novo patrimônio</span>
        </div>
      </Link>
    </div>
  );
};

export default Patrimonios;

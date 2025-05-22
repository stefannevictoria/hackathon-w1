
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Tipos de abas disponíveis na navegação inferior
type TabType = 'dashboard' | 'ativos' | 'holdings';

const Holdings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('holdings');
  const [view, setView] = useState<'list' | 'details'>('list');
  
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <h1 className="text-3xl font-bold mb-8">HOLDINGS</h1>
      
      {view === 'list' ? (
        <>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-3 text-gray-500" />
            <Input 
              placeholder="Buscar holding" 
              className="pl-12 pr-4 py-6 rounded-full" 
            />
          </div>
          
          <div className="border border-gray-300 rounded-lg mb-8">
            <div className="grid grid-cols-3 font-semibold border-b border-gray-300 p-4">
              <div>Nome</div>
              <div>Bens</div>
              <div>Sócios</div>
            </div>
            
            {[1, 2, 3, 4].map((holdingNum) => (
              <div key={holdingNum} className="grid grid-cols-3 border-b border-gray-300 p-4 items-center">
                <div>Holding {holdingNum}</div>
                <div>
                  <div className="bg-gray-300 h-4 w-24"></div>
                </div>
                <div>
                  <Button 
                    variant="outline" 
                    className="bg-gray-200 hover:bg-gray-300"
                    onClick={() => setView('details')}
                  >
                    Visualizar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-600 rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium mb-2">Total de ativos</h2>
              <p className="text-4xl font-bold">R$1.200.000,00</p>
            </div>
            
            <div className="bg-gray-600 rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium mb-2">Valor do Portfólio</h2>
              <div className="h-24 w-full bg-gray-700 flex items-center justify-center relative mt-2">
                <div className="h-px w-full bg-blue-500 absolute">
                  <div className="absolute right-0 w-4 h-4 bg-blue-500 rounded-full -translate-y-2"></div>
                  <div className="absolute right-1/4 w-4 h-4 bg-blue-500 rounded-full -translate-y-2"></div>
                  <div className="absolute right-2/4 w-4 h-4 bg-blue-500 rounded-full -translate-y-2"></div>
                  <div className="absolute right-3/4 w-4 h-4 bg-blue-500 rounded-full -translate-y-2"></div>
                  <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full -translate-y-2"></div>
                </div>
              </div>
              <p className="text-xs mt-4">
                At internos ipsum aut officia eius cum saepe incidunt aut minus natus ad omnis quasi qui fugiat nostrum id consequatur eius.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-600 rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium mb-2">Rendimento</h2>
              <p className="text-4xl font-bold">10%</p>
            </div>
            
            <div className="bg-gray-600 rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium mb-2">Renda Fixa</h2>
              <p className="text-4xl font-bold">R$600.000</p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg mb-8">
            {['A', 'B'].map((ativoLetter, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-300 p-4 items-center">
                <div>Ativo {ativoLetter}</div>
                <div>
                  <div className="bg-gray-400 h-4 w-36"></div>
                </div>
                <div className="text-right">R${index === 0 ? '400.000' : '200.000'}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="bg-gray-200 hover:bg-gray-300"
              onClick={() => setView('list')}
            >
              Voltar para lista
            </Button>
          </div>
        </div>
      )}
      
      {view === 'list' && (
        <div className="fixed bottom-24 right-8">
          <Link to="/nova-holding">
            <Button className="w-16 h-16 rounded-full bg-black text-white hover:bg-gray-900 flex items-center justify-center">
              <Plus size={32} />
            </Button>
          </Link>
          <div className="text-center text-sm mt-2">
            Criar nova holding
          </div>
        </div>
      )}
      
      {/* Navegação inferior (específica para a seção de Holdings) */}
      <div className="fixed bottom-0 left-20 lg:left-64 right-0 bg-black bg-opacity-90 text-white p-4 rounded-t-xl flex justify-around">
        <Link 
          to="/dashboard" 
          className={`px-6 py-2 rounded-full ${activeTab === 'dashboard' ? 'bg-black' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </Link>
        <Link 
          to="/ativos" 
          className={`px-6 py-2 rounded-full ${activeTab === 'ativos' ? 'bg-black' : ''}`}
          onClick={() => setActiveTab('ativos')}
        >
          Ativos
        </Link>
        <Link 
          to="/holdings" 
          className={`px-6 py-2 rounded-full ${activeTab === 'holdings' ? 'bg-black' : ''}`}
          onClick={() => setActiveTab('holdings')}
        >
          Holdings
        </Link>
      </div>
    </div>
  );
};

export default Holdings;

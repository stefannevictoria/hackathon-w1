
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Chart color palette
const COLORS = ['#8884d8', '#0088FE', '#82ca9d', '#FFBB28', '#FF8042'];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [totalPatrimony, setTotalPatrimony] = useState(0);
  const [chartData, setChartData] = useState([
    { name: 'Imóveis', value: 60 },
    { name: 'Ações', value: 25 },
    { name: 'Renda Fixa', value: 15 }
  ]);

  // Load all assets data from localStorage and calculate total value
  useEffect(() => {
    const calculateTotalPatrimony = () => {
      let total = 0;
      let assetsByType: Record<string, number> = {};

      // Get patrimônios
      const patrimonios = JSON.parse(localStorage.getItem('patrimonios') || '[]');
      patrimonios.forEach((item: any) => {
        const value = parseFloat(item.valor?.replace(/[^0-9.-]+/g, '') || '0');
        total += value;
        
        // Add to asset type aggregation
        if (item.tipo) {
          assetsByType[item.tipo] = (assetsByType[item.tipo] || 0) + value;
        } else {
          assetsByType['Patrimônios'] = (assetsByType['Patrimônios'] || 0) + value;
        }
      });

      // Get ativos
      const ativos = JSON.parse(localStorage.getItem('ativos') || '[]');
      ativos.forEach((item: any) => {
        const value = parseFloat(item.valor?.replace(/[^0-9.-]+/g, '') || '0');
        total += value;
        
        // Add to asset type aggregation
        if (item.tipo) {
          assetsByType[item.tipo] = (assetsByType[item.tipo] || 0) + value;
        } else {
          assetsByType['Outros Ativos'] = (assetsByType['Outros Ativos'] || 0) + value;
        }
      });

      // Get investimentos
      const investimentos = JSON.parse(localStorage.getItem('investimentos') || '[]');
      investimentos.forEach((item: any) => {
        const value = parseFloat(item.valor?.replace(/[^0-9.-]+/g, '') || '0');
        total += value;
        
        // Add to asset type aggregation
        if (item.tipo) {
          const displayName = item.tipo === 'acoes' ? 'Ações' : 
                              item.tipo === 'fundos' ? 'Fundos' : 
                              item.tipo === 'renda_fixa' ? 'Renda Fixa' : item.tipo;
          assetsByType[displayName] = (assetsByType[displayName] || 0) + value;
        } else {
          assetsByType['Outros Investimentos'] = (assetsByType['Outros Investimentos'] || 0) + value;
        }
      });

      // Update total value
      setTotalPatrimony(total);
      
      // Update chart data
      const newChartData = Object.entries(assetsByType).map(([name, value]) => ({
        name,
        value
      }));
      
      if (newChartData.length > 0) {
        setChartData(newChartData);
      }
    };

    calculateTotalPatrimony();

    // Setup event listeners for updates
    const handleAssetUpdate = () => {
      calculateTotalPatrimony();
    };

    document.addEventListener('addPatrimonio', handleAssetUpdate);
    document.addEventListener('addAtivo', handleAssetUpdate);
    document.addEventListener('addInvestimento', handleAssetUpdate);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('addPatrimonio', handleAssetUpdate);
      document.removeEventListener('addAtivo', handleAssetUpdate);
      document.removeEventListener('addInvestimento', handleAssetUpdate);
    };
  }, []);

  // Format currency value
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Visão geral do patrimônio</h1>

      {/* Overview Card with Pie Chart */}
      <div className="w1-card mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">{formatCurrency(totalPatrimony)}</h2>
            <p className="text-gray-600 mt-2">
              Valor total dos seus ativos, investimentos e patrimônios cadastrados
            </p>
          </div>
          <div className="w-full md:w-48 h-48 mt-4 md:mt-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Two columns layout for mobile and desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ações rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/nova-holding" className="w1-card flex flex-col items-center justify-center py-8 hover:shadow-md transition-all">
              <Plus size={24} />
              <span className="mt-2 text-center">Criar nova holding</span>
            </Link>
            <Link to="/novo-patrimonio" className="w1-card flex flex-col items-center justify-center py-8 hover:shadow-md transition-all">
              <Plus size={24} />
              <span className="mt-2 text-center">Adicionar patrimônio</span>
            </Link>
            <Link to="/compartilhar" className="w1-card flex flex-col items-center justify-center py-8 hover:shadow-md transition-all">
              <Share2 size={24} />
              <span className="mt-2 text-center">Compartilhar acesso</span>
            </Link>
          </div>
        </div>

        {/* Holdings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Minhas holdings</h2>
          <div className="space-y-4">
            <div className="w1-card">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-400 rounded-md mr-4"></div>
                <div className="flex-1">
                  <h3 className="font-bold">Holding X</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet. Est consequatur repudiandae est vero eveniet ea corrupti quae ut alias neque
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded-md text-sm">
                  Visualizar
                </button>
              </div>
            </div>
            
            <div className="w1-card">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-400 rounded-md mr-4"></div>
                <div className="flex-1">
                  <h3 className="font-bold">Holding Y</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet. Est consequatur repudiandae est vero eveniet ea corrupti quae ut alias neque
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded-md text-sm">
                  Visualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Investimentos: React.FC = () => {
  // Sample data for the pie chart
  const data = [
    { name: 'Ações', value: 30 },
    { name: 'Renda Fixa', value: 50 },
    { name: 'Fundos', value: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">MEUS INVESTIMENTOS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-600 rounded-lg p-6 text-white">
          <h2 className="text-lg font-medium mb-2">Total investido</h2>
          <p className="text-4xl font-bold">R$70.200,00</p>
        </div>
        
        <div className="bg-gray-600 rounded-lg p-6 text-white">
          <h2 className="text-lg font-medium mb-2">Rendimento</h2>
          <p className="text-4xl font-bold">10%</p>
        </div>
      </div>
      
      <div className="bg-gray-600 rounded-lg p-6 text-white mb-8">
        <h2 className="text-lg font-medium mb-4">Alocação</h2>
        <div className="h-48 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="fixed bottom-24 right-8">
        <Link to="/novo-investimento">
          <Button className="w-16 h-16 rounded-full flex items-center justify-center bg-black text-white hover:bg-gray-900">
            <Plus size={32} />
          </Button>
        </Link>
      </div>
      <div className="text-center text-sm mt-4">
        Adicionar novo investimento
      </div>
    </div>
  );
};

export default Investimentos;

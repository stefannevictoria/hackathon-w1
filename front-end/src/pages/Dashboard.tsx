
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data for the pie chart
const data = [
  { name: 'Imóveis', value: 60 },
  { name: 'Ações', value: 25 },
  { name: 'Renda Fixa', value: 15 }
];

const COLORS = ['#8884d8', '#0088FE', '#82ca9d'];

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Visão geral do patrimônio</h1>

      {/* Overview Card with Pie Chart */}
      <div className="w1-card mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">R$3.200.000,00</h2>
            <p className="text-gray-600 mt-2">
              em deserunt totam aut dignissimos fugiat in temporibus facere eos alias veritatis 
              non soluta rerum qui repellendus fugiat hic magni aliquid.
            </p>
          </div>
          <div className="w-full md:w-48 h-48 mt-4 md:mt-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
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

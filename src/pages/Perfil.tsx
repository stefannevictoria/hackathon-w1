
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

const Profile: React.FC = () => {
  const { user } = useAuth();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would update the user profile in the backend
    toast.success('Dados atualizados com sucesso!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <span className="w-12 h-12 bg-w1-dark text-white rounded-full flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </span>
        PERFIL
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="birthDate" className="block text-gray-700 mb-2">Data de nascimento</label>
          <input
            id="birthDate"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-3"
            readOnly
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 mb-2">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-3"
          />
        </div>

        <div className="md:col-span-2 flex justify-center mt-8">
          <button
            type="submit"
            className="w1-button px-16"
          >
            Alterar dados
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

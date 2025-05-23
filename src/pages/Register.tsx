
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';
import { toast } from 'sonner';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !birthDate || !password) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register(name, email, birthDate, password);
      
      if (success) {
        toast.success('Cadastro realizado com sucesso!');
        navigate('/dashboard');
      } else {
        toast.error('Este e-mail já está em uso');
      }
    } catch (error) {
      toast.error('Erro ao realizar cadastro');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-12 flex justify-center md:justify-start">
            <Logo size="lg" withText={false} />
          </div>
          
          <h1 className="text-4xl font-bold mb-8 text-center md:text-left">CADASTRO</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nome completo: <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w1-input"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email: <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w1-input"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="birthDate" className="block text-gray-700 mb-2">
                Data de nascimento: <span className="text-red-500">*</span>
              </label>
              <input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w1-input"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Senha: <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w1-input"
              />
            </div>
            
            <button
              type="submit"
              className="w1-button w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p>
              Já possui uma conta?{' '}
              <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                Faça seu login
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex md:w-1/2 bg-w1-dark items-center justify-center">
        <div className="text-white max-w-md p-12">
          <div className="w-64 h-64 mx-auto">
            <Logo size="lg" withText={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

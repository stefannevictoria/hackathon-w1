
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  birthDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, birthDate: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('w1User');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real application, you would validate credentials with a backend
      // For this demo, we'll check against stored users
      const storedUsers = localStorage.getItem('w1Users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('w1User', JSON.stringify(userWithoutPassword));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (
    name: string,
    email: string,
    birthDate: string,
    password: string
  ): Promise<boolean> => {
    try {
      const newUser = {
        name,
        email,
        birthDate,
        password,
      };

      // Store user in local storage (in a real app this would be handled by a backend)
      const storedUsers = localStorage.getItem('w1Users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Check if email already exists
      if (users.some((u: any) => u.email === email)) {
        return false;
      }
      
      users.push(newUser);
      localStorage.setItem('w1Users', JSON.stringify(users));

      // Automatically log in the user after registration
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('w1User', JSON.stringify(userWithoutPassword));
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('w1User');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Ticket, User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (fullName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const login = async (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          setUser({
            id: '1',
            fullName: 'Test User',
            email: email,
          });
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  const signUp = async (fullName: string, email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (fullName && email && password) {
          setUser({
            id: '1',
            fullName,
            email,
          });
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setTickets([]);
  };

  const addTicket = (ticket: Ticket) => {
    setTickets(prev => [...prev, ticket]);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout, tickets, addTicket }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
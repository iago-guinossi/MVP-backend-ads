import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTrilhas } from '@/service/api';

const TrilhaContext = createContext();

export const TrilhaProvider = ({ children }) => {
  const [trilhas, setTrilhas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrilhas = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTrilhas();
      setTrilhas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrilhas();
  }, []);

  return (
    <TrilhaContext.Provider value={{ trilhas, loading, error, refetch: fetchTrilhas }}>
      {children}
    </TrilhaContext.Provider>
  );
};

export const useTrilhas = () => {
  const context = useContext(TrilhaContext);
  if (!context) throw new Error('useTrilhas deve ser usado dentro de um TrilhaProvider');
  return context;
};

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta de createRoot
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Criar uma instância do QueryClient
const queryClient = new QueryClient();

// Criar o "root" e renderizar o aplicativo
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

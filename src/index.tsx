import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import BookmarkContext from './core/context/BookmarkContext';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BookmarkContext>
          <App />
        </BookmarkContext>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();

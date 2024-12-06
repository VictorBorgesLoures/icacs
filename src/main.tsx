import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import rotas from './router';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Header from './components/Header.tsx'
import InicialPage from './InicialPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <InicialPage />
    </BrowserRouter>
  </StrictMode>,
)

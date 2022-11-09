import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
//import { ReactLogo } from "@assets/svg";
import { MainLayout, Loader } from '@components';
import { RouterApp } from "@routes";
import { Providers } from './context';

const App: FC = () => {
  return (
    <MainLayout>
      <RouterApp />
    </MainLayout>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)

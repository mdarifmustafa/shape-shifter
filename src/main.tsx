import React, { FC } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
//import { ReactLogo } from "@assets/svg";
import { MainLayout, Loader } from "@components"
import { RouterApp } from "@routes"
import { StoreProviders } from "./context"

const App: FC = () => {
  return (
    <MainLayout>
      <RouterApp />
    </MainLayout>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProviders>
      <App />
    </StoreProviders>
  </React.StrictMode>
)

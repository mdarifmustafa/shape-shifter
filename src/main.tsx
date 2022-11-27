import React, { FC } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { ReactLogo } from "@assets/svg"
import { Loader } from "@components"
import { RouterApp } from "@routes"
import { StoreProviders } from "./context"
import { Buffer as BufferPolyfill } from "buffer"
declare var Buffer: typeof BufferPolyfill
globalThis.Buffer = BufferPolyfill

const App: FC = () => {
  return (
    <div className=".mainContainer">
      <>
        <RouterApp />
      </>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProviders>
      <App />
    </StoreProviders>
  </React.StrictMode>
)

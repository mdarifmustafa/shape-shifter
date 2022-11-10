import { createContext, FC, useState } from "react"
import { StoreContextData } from "@interfaces/IStore"
import { ITorrent } from "@interfaces/ITorrent"

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
)

export const StoreProvider: FC<any> = ({ children }) => {
  const [pageView, setPageView] = useState<string>("home")
  const [tabViewIndex, setTabViewIndex] = useState<number>(0)
  const [torrents, setTorrents] = useState<ITorrent[]>([])

  return (
    <StoreContext.Provider
      value={{
        pageView,
        setPageView,
        tabViewIndex,
        setTabViewIndex,
        torrents,
        setTorrents,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

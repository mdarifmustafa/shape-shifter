import {
  FC,
  ReactElement,
  Suspense,
  createContext,
  useState,
  useEffect,
} from "react"
import { BrowserRouter } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ConfigProvider } from "antd"
import { Loader } from "@components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreContextData } from "@interfaces/IStore"
import { ITorrent } from "@interfaces/ITorrent"
import { StreamService } from "@services/StreamService"

const queryClient = new QueryClient()

interface ProvidersProps {
  children: ReactElement
}

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
)

export const StoreProviders: FC<ProvidersProps> = ({ children }) => {
  const [pageView, setPageView] = useState<string>("home")
  const [tabViewIndex, setTabViewIndex] = useState<number>(0)
  const [torrents, setTorrents] = useState<ITorrent[]>([])
  const [searchValue, setSearchValue] = useState<string>("")

  const buildProviderValues: StoreContextData = {
    pageView: pageView,
    setPageView: setPageView,
    tabViewIndex: tabViewIndex,
    setTabViewIndex: setTabViewIndex,
    torrents: torrents,
    setTorrents: setTorrents,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
  }

  useEffect(() => {
    console.log("torrents useEffects are:", torrents, pageView)
  }, [torrents, pageView])

  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider direction={"ltr"}>
          <StoreContext.Provider value={buildProviderValues}>
            <BrowserRouter>{children}</BrowserRouter>
            <StreamService />
            {import.meta.env.DEV && import.meta.env.VITE_ENABLE_DEVTOOL && (
              <ReactQueryDevtools />
            )}
          </StoreContext.Provider>
        </ConfigProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

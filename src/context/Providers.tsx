import { FC, ReactElement, Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ConfigProvider } from "antd"
import { Loader } from "@components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

interface ProvidersProps {
  children: ReactElement
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider direction={"ltr"}>
          <BrowserRouter>{children}</BrowserRouter>
          {import.meta.env.DEV && import.meta.env.VITE_ENABLE_DEVTOOL && (
            <ReactQueryDevtools />
          )}
        </ConfigProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

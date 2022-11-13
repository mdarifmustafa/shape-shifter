import { SetStateAction, SyntheticEvent } from "react"
import { ITorrent } from "./ITorrent"

interface StoreContextData {
  pageView: string
  setPageView: any
  tabViewIndex: number
  setTabViewIndex: any
  torrents: ITorrent[]
  setTorrents: any
}

export type { StoreContextData }

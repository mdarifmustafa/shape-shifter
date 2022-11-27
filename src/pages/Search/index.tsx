import { FC, useEffect, useContext } from "react"
import { Header, SearchComp } from "@components"
import { Box } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import { StoreContext } from "@context"

import { SearchProps } from "@interfaces/ISearch"

// import TorrentSearchApi from "torrent-search-api"
// import parseTorrent from "parse-torrent"
// import fs from "fs"
import { zooqle } from "zooqle"
import { debug } from "console"

export const Search: FC<SearchProps> = () => {
  const { searchValue } = useContext(StoreContext)

  const searchApi = async (value: string) => {
    const response = await zooqle.search(value)
    debugger
    response?.searchResponse?.searchResults.forEach((result, zi) => {
      console.log(zi, "zooqle search result is: ", result.title)
    })
    // console.log("active Providers are:", client)
    // const thetorrent = parseTorrent(
    //   "magnet:?xt=urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36&dn=Leaves%20of%20Grass%20by%20Walt%20Whitman.epub"
    // )
    // console.log("thetorrent", thetorrent)
  }

  useEffect(() => {
    console.log("searchValue is:", searchValue)
    searchApi(searchValue)
  }, [searchValue])

  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
          <SearchComp />
        </AppBar>
        <Box
          sx={{
            height: "calc(100vh - 100px)",
            backgroundColor: "#fff",
            color: "#005",
          }}
        >
          Hi, Search Value is: {searchValue}
        </Box>
      </Box>
    </>
  )
}

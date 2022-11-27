import { StoreContext } from "@context"
import { FC, useEffect, useContext, useState } from "react"
import { EnumTorrentStatus, ITorrent } from "@interfaces/ITorrent"

interface StreamServiceProps {}

export const StreamService: FC<StreamServiceProps> = () => {
  const { torrents, setTorrents } = useContext(StoreContext)
  const streamWorkerInstance: Worker = new Worker(
    new URL("./../../workers/StreamWorker", import.meta.url)
  )

  streamWorkerInstance.onmessage = (e: MessageEvent<string>) => {
    const torObj = JSON.parse(e.data) as ITorrent
    const newTorrents = [...torrents].map((tor) => {
      if (tor.source_uid === torObj.source_uid) {
        tor.source_status = EnumTorrentStatus.queued
      }
      return tor
    })
    setTorrents(newTorrents)
  }

  const initWorker = (torrent: ITorrent) => {
    streamWorkerInstance.postMessage(torrent)
  }

  useEffect(() => {
  }, [])


  useEffect(() => {
    if (torrents.length) {
      const torrent = torrents.find(
        (tor) => tor.source_status === EnumTorrentStatus.declared
      )
      if (torrent) initWorker(torrent)
    }
  }, [torrents])

  return null
}

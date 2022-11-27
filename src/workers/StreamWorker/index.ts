import { ITorrent } from "@interfaces/ITorrent"

const streamWorker = globalThis as unknown as DedicatedWorkerGlobalScope

const stream = (torrent: ITorrent) => {
  var constructTorrent = { ...torrent }
  // throw "I will not do the work"
  streamWorker.postMessage(JSON.stringify(constructTorrent))
}

const tixati = (torrent: ITorrent) => stream(torrent)

streamWorker.onmessage = (e: MessageEvent<ITorrent>) => {
  console.log("tixati e.data is:", e.data)
  tixati(e.data)
}

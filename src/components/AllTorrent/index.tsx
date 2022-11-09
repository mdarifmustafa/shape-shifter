import { FC } from "react"
import styles from "./AllTorrent.module.scss"
import { ITorrent, AllTorrentProps } from "@interfaces/ITorrent"

export const AllTorrent: FC<AllTorrentProps> = () => {
  return (
    <>
      <div className={styles.container}>First Page</div>
      <div className={styles.container}>All Torrents First Page</div>
    </>
  )
}

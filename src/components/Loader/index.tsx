import { FC } from "react"
import styles from "./Loader.module.scss"

interface LoaderProps {}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader} />
    </div>
  )
}

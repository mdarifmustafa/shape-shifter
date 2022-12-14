import { FC, Fragment, useState, useRef, useEffect } from "react"
import styles from "./Header.module.scss"
import { Grid, ClickAwayListener } from "@mui/material"
import { MagnetLight } from "@assets/images"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import SortOutlinedIcon from "@mui/icons-material/SortOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

import Button from "@mui/joy/Button"
import TextField from "@mui/joy/TextField"
import Modal from "@mui/joy/Modal"
import ModalDialog from "@mui/joy/ModalDialog"
import Stack from "@mui/joy/Stack"
import Add from "@mui/icons-material/Add"
import Typography from "@mui/joy/Typography"

// const getClipboardDefaultValue = () => {
//   return "http://torrent.unix-ag.uni-kl.de/"
// }

export const Header: FC = () => {
  const [inputOpen, setInputOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")

  const dialogInputRef = useRef<HTMLInputElement>(null)

  const hideInputModal = () => {
    setInputOpen(false)
  }

  const readClipboardText = async () => {
    if (navigator) {
      const text = await navigator.clipboard.readText()
      if (typeof text === "string") {
        setInputValue(text)
      }
    }
  }

  useEffect(() => {
    if (inputOpen) {
      // if (dialogInputRef.current) dialogInputRef.current.value = "some random value"
      readClipboardText()
    }
  }, [inputOpen])

  const showMagnetInputDialog = () => {
    return (
      <Modal
        open={inputOpen}
        onClose={() => setInputOpen(false)}
        className={styles.joyModalStack}
        hideBackdrop
        onClick={(e) => hideInputModal()}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 2,
            boxShadow: "lg",
          }}
          className={styles.joyModalRoot}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="1rem"
          >
            Paste your magnet url:
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setInputOpen(false)
            }}
          >
            <Stack spacing={2}>
              <TextField
                label="Name"
                autoFocus
                required
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value)
                }}
                style={{
                  borderColor: "#fff",
                  outline: "none",
                }}
                ref={dialogInputRef}
                className={styles.joyInputRootClass}
              />
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    )
  }

  return (
    <Grid container className={styles.header}>
      <Grid item xs={1} className={styles.gridItem}>
        <MoreVertOutlinedIcon />
      </Grid>
      <Grid item xs={2} className={styles.gridItem}>
        <SortOutlinedIcon />
      </Grid>
      <Grid item xs={2} className={styles.gridItem}>
        <Fragment>
          <img
            src={MagnetLight}
            alt="magnet"
            width={20}
            height={"auto"}
            onClick={(e) => {
              e.stopPropagation()
              setInputOpen(true)
            }}
          />
          {inputOpen && showMagnetInputDialog()}
        </Fragment>
      </Grid>
      <Grid item xs={2} className={styles.gridItem}>
        <SearchOutlinedIcon />
      </Grid>
    </Grid>
  )
}

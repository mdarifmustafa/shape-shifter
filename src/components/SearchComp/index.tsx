import React, { FC, useState, memo, ChangeEvent, useContext } from "react"
import styles from "./SearchComp.module.scss"
import { SearchProps } from "@interfaces/ISearch"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import ClearIcon from "@mui/icons-material/Clear"
import { StoreContext } from "@context"

interface DebounceInterface {
  fn: (payload: string) => void
  delay: number
  payload: string
}

const SearchComp: FC<SearchProps> = () => {
  const [value, setValue] = useState<string>("")

  const { setSearchValue } = useContext(StoreContext)

  const syncToContextSearch = (payload: string) => {
    setSearchValue(value)
  }

  const debounce = function (debounceParams: DebounceInterface) {
    const { fn, delay, payload } = debounceParams
    let timer: any
    return function () {
      let context: any = globalThis
      clearTimeout(timer)
      timer = setTimeout(() => {
        return fn.apply(context, [payload])
      }, delay)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    const debounceArgs = {
      fn: syncToContextSearch,
      delay: 750,
      payload: event.target.value,
    }
    debounce(debounceArgs)()
  }

  const handleClearClick = () => {
    setValue("")
  }

  return (
    <>
      <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-search-text"
          type={"text"}
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {value.length > 0 && (
                <ClearIcon
                  onClick={handleClearClick}
                  sx={{ cursor: "pointer" }}
                />
              )}
            </InputAdornment>
          }
          placeholder={"Search torrent"}
          sx={{ maxHeight: "48px" }}
          inputProps={{
            maxLength: 50,
          }}
        />
      </FormControl>
    </>
  )
}

export default memo(SearchComp)

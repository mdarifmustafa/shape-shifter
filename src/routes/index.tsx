import { PatternSharp } from "@mui/icons-material";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ParentPaths, Paths } from "@interfaces/IPaths";
import { Home } from "@pages/Home";

export const paths: Paths<ParentPaths> = {
  login: {
    title: "",
    pathname: "",
    display: ""
  },
  not_authorized: {
    title: "",
    pathname: "",
    display: ""
  },
  page404: {
    title: "",
    pathname: "",
    display: ""
  },
  home: {
    title: "",
    pathname: "",
    display: ""
  }
}

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path={paths.home.pathname} element={<Home/>} />
    </Routes>
  )
}
import { SetStateAction, SyntheticEvent } from "react";

interface StoreContextData {
  pageView: string;
  setPageView: any;
  tabViewIndex: number;
  setTabViewIndex: any;
}

export type {
  StoreContextData,
};
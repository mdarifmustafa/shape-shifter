import { createContext, FC, useState } from "react";
import { StoreContextData } from "@interfaces/IStore";

export const StoreContext = createContext<StoreContextData>(
  {} as StoreContextData
);

export const StoreProvider: FC<any> = ({children}) => {

  const [pageView, setPageView] = useState<string>("home");
  const [tabViewIndex, setTabViewIndex] = useState<number>(0);

  return (
    <StoreContext.Provider 
      value={{
        pageView, 
        setPageView,
        tabViewIndex, 
        setTabViewIndex,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
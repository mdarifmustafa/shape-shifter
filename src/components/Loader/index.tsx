import { FC } from "react";
import classes from "./Loading.module.scss";

interface LoaderProps {
  
}
 
export const Loader: FC<LoaderProps> = () => {
  return ( 
    <div className={classes.container}>
      <span className={classes.loader} />
    </div>
   );
}

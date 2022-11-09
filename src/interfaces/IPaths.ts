import { RouteObject } from "react-router-dom";

export type ParentPaths = 'login' | 'not_authorized' | 'page404' | 'home' | 'detailed';

export type ChildrenPaths = 'create';

export interface PathsObj {
  pathname: string;
  display?: string;
  breadcrumb?: string | null;
  title: string;
  children?: Partial<Paths<ChildrenPaths>>;
}

export type Paths<T extends string = ParentPaths, Y = PathsObj> = {
  [k in T]: Y;
}
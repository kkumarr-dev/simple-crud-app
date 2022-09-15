import { createContext } from "react";

export const LoaderContext = createContext({
  loader: false,
  initLoader: () => {},
});

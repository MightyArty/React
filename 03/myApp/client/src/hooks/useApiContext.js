import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw Error("useApiContext must be used inside an ApiContextProvider");
  }
  return context;
};

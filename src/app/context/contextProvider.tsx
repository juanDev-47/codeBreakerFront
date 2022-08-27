import React, { useState, useContext, createContext } from "react";

export const Context = createContext({
  search: "",
  setSearch: (any) => {},
  category: "",
  setCategory: (any) => {},
  cartInfo: {},
  setCartInfo: (any) => {},
});

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cartInfo, setCartInfo] = useState({});

  return (
    <Context.Provider value={{ search, setSearch, category, setCategory, cartInfo, setCartInfo }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);

export default ContextProvider;

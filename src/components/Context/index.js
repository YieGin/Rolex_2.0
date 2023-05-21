import React, { createContext, useState } from "react";
export const ContextProvider = createContext();
export const Context = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const MenuOpen = () => {
    setMenu(!menu);
  };

  return (
    <ContextProvider.Provider value={{ setMenu, menu, setMenu }}>
      {children}
    </ContextProvider.Provider>
  );
};

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

//authProvider

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  // manage user
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/menu");
      const response = await data.json();
      setMenu(response);
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={menu}>{children}</DataContext.Provider>;
};

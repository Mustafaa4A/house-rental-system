import { createContext, useState } from "react";
import PROPERTIES from "../properties.json";

export const PropertiesContext = createContext({
  properties: [],
  setPeoperties: () => null,
});

export const PropertiesProvider = ({ children }) => {
  const [properties, setPeoperties] = useState(PROPERTIES);
  const value = { properties };
  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
};

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  authlistener,
  createUserFromAuth,
} from "../utils/firebase/authentication.util";

//the actual value that use access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//the actual component
export const UserProvider = ({ children }) => {
  //
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //
  useEffect(() => {
    const subscriber = authlistener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      setCurrentUser(user);
    });
    return subscriber;
  }, []);

  //
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

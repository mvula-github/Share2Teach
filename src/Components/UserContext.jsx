/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/status")
      .then((response) => setRole(response.data.role))
      .catch((error) => console.error("Error fetching role", error));
  }, []);

  return (
    <UserContext.Provider value={{ role }}>{children}</UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);

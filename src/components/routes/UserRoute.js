import { useState, useEffect } from "react";
import {
  Navigate,
} from "react-router-dom";

const UserRoute = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const ok = JSON.parse(localStorage.getItem("user"));
    setUser(ok);
  }, []);

  if (user == null) {
    return <Navigate to="/unauthorize" />;
  }
  return children;
};

export default UserRoute;

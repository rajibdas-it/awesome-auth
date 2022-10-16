import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <button className="btn loading">loading</button>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "@/store";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = useSelector((state: RootState) => state.auth.token);
  return token ? children : <Navigate to="/login" replace />;
}

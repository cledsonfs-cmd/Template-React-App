import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/store/modules/auth/actions";
import { RootState } from "@/store";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(username, password));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
        <button type="submit" disabled={loading}>Entrar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

import apiClient from "./apiClient";

export const login = async (username: string, password: string) => {
  const response = await apiClient.post("/auth/login", { username, password });
  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
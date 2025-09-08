import { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText, CircularProgress, Container } from "@mui/material";
import apiClient from "../api/apiClient";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get<User[]>("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Users;
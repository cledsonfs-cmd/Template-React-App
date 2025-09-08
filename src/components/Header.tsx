import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { label: "Home", path: "/" },
    ...(token
      ? [
          { label: "Dashboard", path: "/dashboard" },
          { label: "Usuários", path: "/users" },
        ]
      : []),
  ];

  const renderMenu = () => (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.path}
          component={Link}
          to={item.path}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
      <ListItem
        button
        onClick={() => {
          setDrawerOpen(false);
          token ? handleLogout() : navigate("/login");
        }}
      >
        <ListItemText primary={token ? "Sair" : "Entrar"} />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#006837" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + texto institucional */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src="/logo-ceara.svg" alt="Governo do Ceará" style={{ height: 50 }} />
          {!isMobile && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1 }}>
                Governo do Estado do Ceará
              </Typography>
              <Typography variant="body2">
                Superintendência Estadual do Meio Ambiente - SEMACE
              </Typography>
            </Box>
          )}
        </Box>

        {/* Menu de navegação */}
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              {renderMenu()}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item.path} color="inherit" component={Link} to={item.path}>
                {item.label}
              </Button>
            ))}
            <Button color="inherit" onClick={token ? handleLogout : () => navigate("/login")}>
              {token ? "Sair" : "Entrar"}
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
     <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>{children}</Container>
      <Footer />
    </Box>
    </>
  );
};

export default MainLayout;
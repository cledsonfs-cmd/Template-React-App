// src/components/Footer.tsx
import { Box, Typography, Link as MuiLink } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#004d26", // verde mais escuro que o header
        color: "white",
        textAlign: "center",
        py: 3,
        mt: "auto",
      }}
    >
      {/* Texto institucional */}
      <Typography variant="body1" fontWeight="bold">
        Governo do Estado do Ceará
      </Typography>
      <Typography variant="body2">
        Superintendência Estadual do Meio Ambiente - SEMACE
      </Typography>

      {/* Links úteis */}
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        <MuiLink href="https://www.ceara.gov.br" target="_blank" rel="noopener" color="inherit" underline="hover">
          Portal do Governo
        </MuiLink>
        <MuiLink href="https://www.semace.ce.gov.br" target="_blank" rel="noopener" color="inherit" underline="hover">
          Site SEMACE
        </MuiLink>
        <MuiLink href="https://www.ceara.gov.br/acessibilidade" target="_blank" rel="noopener" color="inherit" underline="hover">
          Acessibilidade
        </MuiLink>
      </Box>

      {/* Direitos autorais */}
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Governo do Estado do Ceará - Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

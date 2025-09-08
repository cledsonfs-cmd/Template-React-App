# Template Frontend

Template base para projetos em **React + TypeScript + Material UI**, com autenticação via **JWT**, layout padrão com **Header e Footer**, rotas protegidas e integração com API REST (ex: Spring Boot).

---

## 📂 Estrutura do projeto

```
vite-react-template/
├── src/
│   ├── api/              # Configuração Axios + Serviços de autenticação
│   ├── components/       # Componentes reutilizáveis (Header, Footer, ProtectedRoute)
│   ├── context/          # Contexto de autenticação (AuthContext)
│   ├── hooks/            # Hooks customizados (useAuth)
│   ├── layouts/          # Layout padrão (MainLayout)
│   ├── pages/            # Páginas (Home, Login, Dashboard)
│   ├── theme/            # Tema Material UI
│   ├── App.tsx           # Definição das rotas
│   └── main.tsx          # Ponto de entrada
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## ⚙️ Instalação

1. Clone o repositório ou baixe o `.zip`:
   ```bash
   git clone http://gitlab-gcp.semace.ce.gov.br/semace/templates/template-frontend.git
   cd template-frontend
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

3. Rode o servidor de desenvolvimento:
   ```bash
   yarn dev
   # ou
   npm run dev
   ```

Acesse em: **http://localhost:5173**

---

## 🔑 Autenticação

- O template usa **JWT** armazenado no `localStorage`.
- Exemplo de login em `src/pages/Login.tsx`.
- API simulada espera endpoint `/auth/login` retornando `{ token: "..." }`.

Você pode integrar facilmente com sua **API Spring Boot**.

---

## 🖼️ Layout

- **Header**: barra superior fixa (Material UI AppBar)
- **Footer**: rodapé simples
- **MainLayout**: centraliza conteúdo entre Header e Footer

---

## 🔒 Rotas protegidas

- Implementadas com `ProtectedRoute.tsx`
- Usuário só acessa `/dashboard` se estiver logado
- Caso contrário, é redirecionado para `/login`

---

## 🎨 Tema Material UI

Arquivo `src/theme/theme.ts` permite personalizar cores e estilos globais:

```ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

export default theme;
```

---

## 📌 Próximos passos para sua equipe

- Configurar endpoint real do **Spring Boot** em `src/api/apiClient.ts`
- Criar novas páginas dentro de `src/pages`
- Expandir componentes reutilizáveis em `src/components`
- Personalizar tema MUI em `src/theme/theme.ts`

---

👨‍💻 Desenvolvido como **padrão de equipe** para acelerar novos projetos React.


---

## 📡 Exemplo de chamada autenticada

Incluímos a página **Users** (`/users`) que faz uma requisição autenticada para o endpoint `/users` da API.

- Arquivo: `src/pages/Users.tsx`
- Protegida por `ProtectedRoute`
- Exibe lista de usuários com `id`, `name` e `email`.

```tsx
useEffect(() => {
  const response = await apiClient.get<User[]>("/users");
  setUsers(response.data);
}, []);
```


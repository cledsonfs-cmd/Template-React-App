# Template React App

Modelo inicial (boilerplate) para aplicações React com TypeScript, configurado com Vite.

---

##  Tecnologias

- **React** + **TypeScript**  
- Bundler **Vite** (via `vite.config.ts`)  
- **HTML** (via `index.html`)  
- Configurações TypeScript (`tsconfig.json`, `tsconfig.node.json`)  
- Gerenciamento de dependências com **package.json**  

---

##  Estrutura do Projeto

```text
.
├── src/
│   └── (código-fonte React em TypeScript)
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

##  Primeiros Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/cledsonfs-cmd/Template-React-App.git
   cd Template-React-App
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) (ou conforme indicado no terminal) no navegador.

5. Para build de produção:
   ```bash
   npm run build
   # ou
   yarn build
   ```

6. Para servir a build localmente:
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

---

##  Personalizações

Edite o projeto conforme necessário:

- Adicione componentes e estilos dentro de `src/`
- Atualize as configurações no `vite.config.ts` (ex: aliases, plugins)
- Ajuste os arquivos de configuração TypeScript (`tsconfig.json` ou `tsconfig.node.json`)

---

##  Scripts Disponíveis

| Script           | Descrição                                 |
|------------------|--------------------------------------------|
| `dev`            | Inicia o servidor de desenvolvimento       |
| `build`          | Gera os arquivos para produção             |
| `preview`        | Visualiza a build gerada em ambiente local |

Você pode adicionar mais scripts úteis (testes, lint, formatação, etc.) no `package.json`.

---

##  Licença

Este projeto atualmente **não possui uma licença especificada**. Recomenda-se adicionar uma (ex: MIT) no futuro.

---

##  Observação

Este repositório é um template base para arrancar novas aplicações React com TypeScript e Vite de forma rápida. Fique à vontade para **dar uma estrela** ⭐ e usá-lo como ponto de partida!

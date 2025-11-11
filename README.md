# 🚀 DevBills - Sistema de Gestão Financeira

Sistema completo de gestão financeira pessoal desenvolvido com TypeScript, Fastify e React.

## 📋 Sobre o Projeto

DevBills é uma aplicação full-stack para controle de finanças pessoais, permitindo gerenciar transações, categorias e visualizar relatórios financeiros.

## 🛠️ Tecnologias

### Backend
- **TypeScript** - Tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Node.js** - Runtime JavaScript
- **TSX** - TypeScript executor ultra-rápido
- **ESLint** - Linting de código
- **Prettier** - Formatação de código

### Frontend
- Em desenvolvimento...

## 📁 Estrutura do Projeto

```
devbills/
├── backend/              # API Backend
│   ├── src/
│   │   ├── routes/      # Rotas da API
│   │   ├── app.ts       # Configuração do Fastify
│   │   └── server.ts    # Entry point
│   ├── .env.example     # Variáveis de ambiente exemplo
│   ├── tsconfig.json    # Configuração TypeScript
│   └── package.json     # Dependências
├── frontend/            # Frontend React (em breve)
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ ou superior
- Yarn (recomendado) ou npm

### Backend

```bash
# 1. Clone o repositório
git clone https://github.com/devkassio/DevBills.git
cd DevBills

# 2. Entre na pasta backend
cd backend

# 3. Instale as dependências
yarn install

# 4. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# 5. Inicie o servidor de desenvolvimento
yarn dev

# Servidor rodando em http://localhost:3001
```

### Scripts Disponíveis

```bash
yarn dev          # Desenvolvimento com hot reload
yarn dev:inspect  # Desenvolvimento com debugger
yarn build        # Compila TypeScript para produção
yarn start        # Executa versão compilada
yarn lint         # Verifica código
yarn lint:fix     # Corrige código automaticamente
yarn format       # Formata código com Prettier
yarn type-check   # Verifica tipos TypeScript
yarn clean        # Limpa pasta dist
```

## 📡 API Endpoints

### Health Check
```http
GET /health
```

Retorna o status da API:
```json
{
  "status": "ok",
  "timestamp": "2025-11-10T00:00:00.000Z",
  "message": "DevBills API RODANDO!"
}
```

### Categorias
```http
GET /categories
```

### Transações
```http
GET /transactions?month=4&year=2025
POST /transactions
DELETE /transactions/:id
```

### Resumo
```http
GET /transactions/summary?month=4&year=2025
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na pasta `backend/`:

```env
NODE_ENV=development
PORT=3001
HOST=0.0.0.0
```

## 📦 Deploy

O projeto está configurado com GitHub Actions para CI/CD automático.

### Workflow

- ✅ Lint automático
- ✅ Type checking
- ✅ Build de produção
- ✅ Testes (em breve)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 👤 Autor

**Kassio**
- GitHub: [@devkassio](https://github.com/devkassio)

## ⭐ Mostre seu apoio

Dê uma ⭐️ se este projeto te ajudou!

---

**DevBills** - Gerencie suas finanças com inteligência 💰

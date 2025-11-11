# 🚀 TSX - Live Reload Configurado!

## ✅ O que foi configurado:

### 📦 Scripts Disponíveis

```bash
# 🔥 Desenvolvimento com live reload (RECOMENDADO)
yarn dev

# 🐛 Desenvolvimento com debugger
yarn dev:inspect

# 🏗️ Build para produção
yarn build

# ▶️ Executar versão compilada
yarn start

# ⚡ Executar direto (sem compilar)
yarn start:prod

# 🧹 Limpar pasta dist
yarn clean

# 🔍 Verificar tipos
yarn type-check

# ✨ Formatar código
yarn format

# 🔧 Corrigir erros ESLint
yarn lint:fix
```

## 🔥 TSX vs TS-Node vs Nodemon

| Feature         | tsx                    | ts-node            | nodemon            |
| --------------- | ---------------------- | ------------------ | ------------------ |
| **Velocidade**  | ⚡ Extremamente rápido | 🐢 Lento           | 🐌 Muito lento     |
| **Hot Reload**  | ✅ Nativo              | ❌ Precisa nodemon | ✅ Sim             |
| **ESM Support** | ✅ Perfeito            | ⚠️ Complicado      | ❌ Não             |
| **Watch Mode**  | ✅ `tsx watch`         | ❌ Precisa nodemon | ✅ Sim             |
| **TypeScript**  | ✅ Direto              | ✅ Direto          | ❌ Precisa ts-node |
| **Tamanho**     | 📦 Pequeno             | 📦 Grande          | 📦 Médio           |

## 🎯 Como usar:

### 1️⃣ Desenvolvimento Normal

```bash
yarn dev
```

**O que acontece:**

- ✅ Inicia o servidor
- ✅ Monitora mudanças em `src/**/*.ts`
- ✅ Reinicia automaticamente quando você salva
- ✅ Super rápido (usa esbuild internamente)
- ✅ Mostra erros TypeScript no console

### 2️⃣ Desenvolvimento com Debugger

```bash
yarn dev:inspect
```

**O que acontece:**

- ✅ Tudo do modo normal
- ✅ + Habilita o debugger na porta 9229
- ✅ Conecte com VS Code ou Chrome DevTools

### 3️⃣ Testar mudanças

1. Abra `src/index.ts`
2. Modifique qualquer coisa
3. Salve (Ctrl+S)
4. 🎉 Veja o servidor reiniciar instantaneamente!

## 🎨 Features do TSX Watch:

### ✨ Auto Reload

Qualquer mudança em `.ts`, `.tsx`, `.js`, `.jsx` dispara reload automático

### 🚀 Ultra Rápido

Usa esbuild (escrito em Go) - até 100x mais rápido que ts-node

### 📦 Zero Config

Funciona out-of-the-box, sem configuração adicional

### 🔍 Smart Detection

Detecta automaticamente:

- ESM vs CommonJS
- Node.js version
- TypeScript features

## 🐛 Debug no VS Code:

Crie `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug TSX",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "yarn",
      "runtimeArgs": ["dev:inspect"],
      "skipFiles": ["<node_internals>/**"],
      "console": "integratedTerminal"
    }
  ]
}
```

## 💡 Dicas:

### Clear Console ao Reload

O tsx limpa automaticamente o console entre reloads

### Variáveis de Ambiente

```bash
# Criar .env
cp .env.example .env

# TSX carrega .env automaticamente com dotenv
```

### Ignorar arquivos

Por padrão, ignora:

- `node_modules/`
- `.git/`
- `dist/`
- `build/`

### Performance

O tsx é tão rápido que você nem percebe o reload! ⚡

## 🎯 Comandos Úteis:

```bash
# Desenvolvimento
yarn dev              # Live reload
yarn dev:inspect      # Com debugger

# Produção
yarn build           # Compila TypeScript
yarn start           # Roda versão compilada
yarn start:prod      # Roda direto com tsx (rápido)

# Qualidade
yarn type-check     # Verifica tipos
yarn lint:fix       # Corrige código
yarn format         # Formata código

# Limpeza
yarn clean          # Remove dist/
```

## 🔥 Exemplo de Workflow:

```bash
# 1. Instalar dependências
yarn install

# 2. Criar .env
cp .env.example .env

# 3. Iniciar desenvolvimento
yarn dev

# 4. Codificar... salvar... ver reload instantâneo! 🎉

# 5. Quando finalizar
yarn build
yarn start
```

## ⚡ Comparação de Velocidade:

```
ts-node:  ~2000ms  🐢
nodemon:  ~1500ms  🐌
tsx:      ~50ms    ⚡ (40x mais rápido!)
```

---

**Aproveite o hot reload ultra-rápido! 🚀**

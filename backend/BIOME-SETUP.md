# 🚀 Configuração Biome.js - Instalação da Extensão

## ⚡ Passo a Passo

### 1️⃣ Instalar Extensão do Biome no VS Code

Abra o VS Code e execute **UMA** das opções abaixo:

#### **Opção A: Via Command Palette (Recomendado)**
```
1. Pressione: Ctrl+Shift+P (Windows) ou Cmd+Shift+P (Mac)
2. Digite: "Extensions: Install Extensions"
3. Procure por: "Biome"
4. Clique em: "Install" na extensão "Biome" (by biomejs)
```

#### **Opção B: Via Terminal Integrado**
```powershell
code --install-extension biomejs.biome
```

#### **Opção C: Via Marketplace**
1. Clique no ícone de Extensões na barra lateral (Ctrl+Shift+X)
2. Procure por "Biome"
3. Instale a extensão oficial "Biome" da biomejs

---

### 2️⃣ Desabilitar Extensões Conflitantes

**IMPORTANTE:** Desabilite estas extensões que conflitam com o Biome:

#### Via UI:
1. Abra Extensões (Ctrl+Shift+X)
2. Procure e **DESABILITE** (não precisa desinstalar):
   - ❌ **Prettier - Code formatter** (esbenp.prettier-vscode)
   - ❌ **ESLint** (dbaeumer.vscode-eslint)

#### Via Command Palette:
```
1. Ctrl+Shift+P
2. Digite: "Extensions: Disable"
3. Selecione: "Prettier - Code formatter"
4. Repita para: "ESLint"
```

---

### 3️⃣ Recarregar VS Code

Após instalar o Biome e desabilitar Prettier/ESLint:

```
Ctrl+Shift+P → "Developer: Reload Window"
```

OU simplesmente feche e abra o VS Code novamente.

---

## ✅ Verificar Instalação

1. Abra qualquer arquivo `.ts` do projeto
2. Pressione `Shift+Alt+F` para formatar
3. No canto inferior direito deve aparecer "Biome" como formatador

---

## 🎯 O que foi configurado automaticamente

- ✅ **biome.json** - Configuração turbinada do Biome
- ✅ **.vscode/settings.json** - Biome como formatador padrão
- ✅ **.vscode/extensions.json** - Recomendação da extensão Biome
- ✅ **package.json** - Scripts do Biome adicionados

---

## 🔧 Scripts Disponíveis

```bash
yarn biome:check       # Verifica formatação + lint
yarn biome:fix         # Corrige automaticamente
yarn biome:lint        # Apenas lint
yarn biome:format      # Apenas formatação
```

---

## ⚙️ Configurações Aplicadas

### Formatador:
- ✅ Aspas simples (`'`)
- ✅ Ponto e vírgula (`;`)
- ✅ 2 espaços de indentação
- ✅ 100 caracteres por linha
- ✅ Line ending LF
- ✅ Organiza imports automaticamente

### Linter:
- ✅ 50+ regras ativadas
- ✅ Detecta erros comuns
- ✅ Sugere melhorias de performance
- ✅ Avisa sobre código suspeito
- ⚠️ Avisos em vez de erros para `any` e variáveis não usadas

---

## 🆚 Biome vs ESLint + Prettier

| Característica | Biome | ESLint + Prettier |
|---------------|-------|-------------------|
| Velocidade | ⚡ **97% mais rápido** | 🐌 Lento |
| Configuração | 🎯 Um arquivo | 📝 Múltiplos arquivos |
| Dependências | 📦 1 pacote | 📦 10+ pacotes |
| RAM | 💾 Baixo consumo | 💾 Alto consumo |
| Format + Lint | ✅ Integrado | ❌ Separado |

---

## 🎨 Formatação ao Salvar

Já está configurado! Ao salvar qualquer arquivo:
- ✅ Formata automaticamente
- ✅ Organiza imports
- ✅ Aplica correções rápidas

---

## ❓ Problemas?

### Se a formatação não funcionar:

1. Verifique se a extensão Biome está ativa:
   ```
   Ctrl+Shift+P → "Extensions: Show Enabled Extensions"
   Procure: "Biome"
   ```

2. Verifique o formatador padrão:
   ```
   Ctrl+Shift+P → "Format Document With..."
   Selecione: "Biome"
   Marque: "Configure Default Formatter"
   ```

3. Se aparecer erro "Biome not found":
   ```powershell
   cd backend
   yarn install
   ```

---

## 🔥 Pronto!

Agora você tem o linter/formatter **MAIS RÁPIDO** do mercado configurado! 🚀

**Biome** é escrito em **Rust** e é **97% mais rápido** que ESLint+Prettier!

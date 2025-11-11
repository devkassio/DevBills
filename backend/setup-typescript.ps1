# 📦 Script de instalação de dependências para TypeScript
# Execute: yarn setup

Write-Host "🚀 Instalando dependências essenciais para TypeScript com Yarn..." -ForegroundColor Cyan

# TypeScript e types
yarn add -D typescript @types/node

# ESLint e plugins
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import

# Prettier e integração com ESLint
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

# Ferramentas adicionais
yarn add -D tsx tslib rimraf

# Sucesso
Write-Host "✅ Todas as dependências foram instaladas com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Próximos passos:" -ForegroundColor Yellow
Write-Host "1. Instale as extensões recomendadas no VS Code"
Write-Host "2. Reinicie o VS Code para aplicar todas as configurações"
Write-Host "3. Comece a codificar com autocomplete avançado!" -ForegroundColor Green

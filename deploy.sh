#!/bin/bash

# Script de Deploy Automático para GitHub Pages

echo "🚀 Iniciando deploy para GitHub Pages..."

# 1. Build do Frontend
echo "📦 Fazendo build do React..."
cd frontend
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer build!"
    exit 1
fi

# 2. Copiar build para raiz
echo "📁 Copiando arquivos para raiz..."
cd ..
rm -rf static asset-manifest.json
cp -r frontend/build/* .

if [ $? -ne 0 ]; then
    echo "❌ Erro ao copiar arquivos!"
    exit 1
fi

# 3. Git commit e push
echo "📤 Fazendo commit e push..."
git add .
git commit -m "build: update portfolio $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer push!"
    exit 1
fi

echo "✅ Deploy realizado com sucesso!"
echo "🌐 Seu portfólio estará atualizado em 2-5 minutos em:"
echo "   https://nycollasblenes-max.github.io/portifolio-2026/"

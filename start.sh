#!/bin/bash

# Script para iniciar o portfólio
echo "🚀 Iniciando o Portfólio..."

# Matar processos anteriores
pkill -f "python3.*app.py" 2>/dev/null
lsof -ti:5001 | xargs kill -9 2>/dev/null
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Iniciar backend
echo "📦 Iniciando Backend Flask na porta 5001..."
cd /Users/nycollasblenes/Documents/python/portifolio/backend
python3 app.py &
BACKEND_PID=$!

sleep 2

# Verificar se backend está rodando
if curl -s http://localhost:5001/api/health > /dev/null; then
    echo "✅ Backend rodando em http://localhost:5001"
else
    echo "❌ Erro ao iniciar backend"
    exit 1
fi

# Instalar dependências do frontend se necessário
echo "📦 Verificando dependências do Frontend..."
cd /Users/nycollasblenes/Documents/python/portifolio/frontend
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências (pode demorar alguns minutos)..."
    npm install
fi

# Iniciar frontend
echo "🎨 Iniciando Frontend React na porta 3000..."
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Sistema iniciado!"
echo "📍 Backend: http://localhost:5001"
echo "📍 Frontend: http://localhost:3000"
echo ""
echo "Pressione Ctrl+C para parar ambos os servidores"

# Aguardar
wait

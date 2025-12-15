from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dados dos projetos (você pode substituir por um banco de dados depois)
projects = [
    {
        "id": 1,
        "title": "Gerente: Minha Loja",
        "description": "O gerente: Minha loja é uma plataforma projetado para a empresa Rede Confiança com uma interface rápida e centralizada que permite aos gerentes acompanhar a performance da loja em tempo real, padronizando o acesso e melhorando a navegação das lideranças operacionais.",
        "technologies": [],
        "image": "http://localhost:3000/Simbolo.png",
        "live_url": "https://portifolio-portifolio-gerentes.swntp9.easypanel.host/"
    },
    {
        "id": 2,
        "title": "Painel de Performance",
        "description": "O Painel de Performance é uma plataforma projetado para a empresa Rede Confiança analisar e acompanhar, em tempo real, os indicadores comerciais por loja, coordenação e colaborador, auxiliando na tomada de decisão e no controle de metas.",
        "technologies": [],
        "image": "http://localhost:3000/Simbolo.png",
        "live_url": "https://portifolio-portifolio-performance.swntp9.easypanel.host/"
    },
    {
        "id": 3,
        "title": "Interlojas Cup",
        "description": "A Interlojas Cup é uma plataforma interativa projetado para a empresa Rede Confiança para divulgar resultados de campeonatos entre lojas, promovendo engajamento, espírito de equipe e reconhecimento de desempenho por meio da gamificação.",
        "technologies": [],
        "image": "http://localhost:3000/campeonato.png",
        "live_url": "https://rede-confianca-interlojas.lpl0df.easypanel.host/"
    },
    {
        "id": 4,
        "title": "Painel Financeiro",
        "description": "O Painel financeiro é uma plataforma projetado para a empresa Rede Confiança, interativa e visualmente atrativa para gerenciar, acompanhar e analisar as movimentações financeiras da empresa.",
        "technologies": [],
        "image": "http://localhost:3000/Simbolo.png",
        "live_url": "https://portifolio-portifolio-financeiro.swntp9.easypanel.host/"
    }
]

# Informações pessoais
profile = {
    "name": "Nycollas Blenes",
    "title": "Desenvolvedor Full Stack | IA & Automação",
    "skills": [
        {"name": "Python", "level": 90},
        {"name": "JavaScript", "level": 85},
        {"name": "React", "level": 80},
        {"name": "Flask", "level": 85},
        {"name": "SQL", "level": 75},
        {"name": "Docker", "level": 70},
        {"name": "Git", "level": 85}
    ],
    "email": "cnycollasblenes@gmail.com",
    "github": "https://github.com/NycollasBlenes-max",
    "linkedin": "https://www.linkedin.com/in/nycollas-blenes-6a2065262/"
}


@app.route('/')
def home():
    """Página inicial da API"""
    return jsonify({
        "message": "API do Portfólio de Nycollas Blenes",
        "endpoints": {
            "projetos": "/api/projects",
            "perfil": "/api/profile",
            "saúde": "/api/health"
        }
    })


@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Retorna todos os projetos"""
    return jsonify(projects)


@app.route('/api/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """Retorna um projeto específico pelo ID"""
    project = next((p for p in projects if p['id'] == project_id), None)
    if project:
        return jsonify(project)
    return jsonify({"error": "Projeto não encontrado"}), 404


@app.route('/api/profile', methods=['GET'])
def get_profile():
    """Retorna informações do perfil"""
    return jsonify(profile)


@app.route('/api/health', methods=['GET'])
def health_check():
    """Endpoint de verificação de saúde da API"""
    return jsonify({"status": "healthy", "message": "API está funcionando!"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5013)
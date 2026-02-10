# LinkedIn Job Bot – Backend

![GitHub repo size](https://img.shields.io/github/repo-size/BrandaoDan/linkedin-job-backend)
![GitHub stars](https://img.shields.io/github/stars/BrandaoDan/linkedin-job-backend?style=social)
![GitHub forks](https://img.shields.io/github/forks/BrandaoDan/linkedin-job-backend?style=social)
![GitHub issues](https://img.shields.io/github/issues/BrandaoDan/linkedin-job-backend)
![GitHub license](https://img.shields.io/github/license/BrandaoDan/linkedin-job-backend)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-black)
![Playwright](https://img.shields.io/badge/Playwright-automação-blue)

API desenvolvida em Node.js com Express para automatizar a busca de vagas no feed do LinkedIn utilizando Playwright.

---

## 🚀 Tecnologias
- Node.js  
- Express  
- Playwright  
- CORS  
- Postman (para testes)

---

## 📌 Funcionalidades
- Login automatizado no LinkedIn  
- Navegação no feed  
- Scroll automático para carregar posts  
- Captura de publicações  
- Filtro de posts por palavras-chave (tags)  
- Retorno estruturado via API para consumo pelo front-end  

---

# 📁 Estrutura do projeto
backend/
├── services/
│   └── linkedin.js
├── utils/
├── routes.js
├── server.js
└── README.md

# 🔌 Endpoint
POST /api/buscar-vagas

# 📦 Body (JSON)
{
  "email": "seu_email",
  "senha": "sua_senha",
  "tags": ["dev", "remoto", "junior"]
}

# ▶️ Rodando localmente
cd backend
npm install
npm run dev



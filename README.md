# LinkedIn Job Bot – Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-black)
![Playwright](https://img.shields.io/badge/Playwright-automação-blue)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

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

## 📦 Estrutura
```bash
backend/
 ├── services/
 │   └── linkedin.js      
 ├── utils/
 ├── routes.js           
 ├── server.js          
 └── README.md

 ---



 🔌 Endpoint

 POST `/api/buscar-vagas`

**Body (JSON):**
```json
{
  "email": "seu_email",
  "senha": "sua_senha",
  "tags": ["dev", "remoto", "junior"]
}

```bash
|| RODANDO LOCALMENTE ||

cd backend
npm install
npm run dev


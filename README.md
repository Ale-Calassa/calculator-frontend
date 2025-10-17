# 🧮 Calculadora com Histórico – Frontend
Este é o frontend de uma calculadora com histórico de operações, desenvolvida em React e hospedada no GitHub Pages. Ela se comunica com um backend em FastAPI hospedado no Railway, permitindo cálculos matemáticos e armazenamento das últimas 5 operações realizadas.

### Acesse o projeto online
```https://ale-calassa.github.io/calculator-frontend/```

## Funcionalidades
    • Interface interativa para cálculos matemáticos
    • Histórico das últimas 5 operações
    • Suporte a teclado e botões
    • Integração com backend FastAPI via API REST
    • Hospedagem gratuita com GitHub Pages
    
## Tecnologias utilizadas
    • React
    • JavaScript
    • CSS
    • GitHub Pages
    • FastAPI (backend)
    • Railway (backend hosting)
    
## Instalação local
### Clone o repositório
    • git clone https://github.com/ale-calassa/calculator-frontend.git

### Acesse a pasta
    • cd calculator-frontend

### Instale as dependências
    • npm install

### Rode o projeto localmente
    • npm start

## Deploy no GitHub Pages
Este projeto utiliza o pacote gh-pages para deploy automático.

### Scripts no package.json:
"homepage": "https://ale-calassa.github.io/calculator-frontend",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

### Para publicar: 
    • npm run deploy

## Integração com o backend
O frontend se comunica com o backend hospedado no Railway:
const API_URL = "https:// ...";

### Certifique-se de que o backend esteja com CORS configurado para permitir: 

allow_origins = ["https://…"]

## Licença 📜
Este projeto é de código aberto e está licenciado sob a MIT License.

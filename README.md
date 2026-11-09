# 🚗 Autoescuela FLEMING — Landing Page Oficial (Aldaia, Valencia)

> Website institucional e de alta conversão para a **Autoescuela Fleming**, referência em ensino de direção humanizado com paciência, segurança e empatia em Aldaia (València, Espanha).

[![Deploy to GitHub Pages](https://github.com/ahk2001/FLEMING/actions/workflows/deploy.yml/badge.svg)](https://github.com/ahk2001/FLEMING/actions/workflows/deploy.yml)
[![Licença](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE)
[![Google Reviews](https://img.shields.io/badge/Google_Reviews-5.0_★-F5A623.svg)](https://maps.google.com)

---

## 📁 Arquitetura Profissional de Diretórios

O projeto foi reestruturado seguindo as melhores práticas da indústria para projetos web estáticos de alta performance e manutenibilidade:

```text
fleming/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD: Pipeline de deploy automatizado e seguro no GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css               # Folha de estilos centralizada (Design System Fleming)
│   ├── js/
│   │   └── main.js                 # Scripts interativos (Menu mobile, sliders, animações)
│   └── images/
│       ├── brand/                  # Identidade visual da marca (Logo oficial)
│       │   └── logo.png
│       ├── hero/                   # Banners e fundos principais
│       │   └── hero-bg.webp
│       ├── services/               # Imagens das áreas de atuação
│       │   ├── aula-teorica.webp
│       │   ├── clase-practica.webp
│       │   └── orientacion-equipo.png
│       └── students/               # Registros e depoimentos com placa 'L' de aprovados
│           ├── alumna-aprobada-leydis.png
│           ├── alumna-aprobada-sonia.png
│           ├── alumna-placa-l-arianne.png
│           ├── alumno-celebracion-johnny.png
│           ├── alumnos-aprobados-celebracion.png
│           ├── alumnos-equipo-toni-iris.png
│           └── alumnos-placa-l-pablo.png
├── docs/                           # Documentação estratégica e dados do negócio
│   ├── dossie_autoescola.md        # Dossiê estratégico completo de inteligência e UX
│   └── dados.txt                   # Informações de contato e links públicos oficiais
├── .gitignore                      # Regras de exclusão para versionamento limpo
├── index.html                      # Estrutura HTML5 semântica e acessível
└── README.md                       # Documentação técnica e guia do projeto
```

---

## 🎨 Design System & Identidade Visual

- **Cores Oficiais**:
  - `Verde Esmeralda (#1E7C62)`: Tom institucional do Renault Clio da frota.
  - `Arena Crema (#F3ECD9 / #FAF6EE)`: Superfície e fundo acolhedor de leitura descansada.
  - `WhatsApp Green (#1FA855 / #25D366)`: CTAs de alta conversão direta para atendimento.
  - `Placa L Homologada (#008751)`: Selo oficial de condutor DGT Espanha.
  - `Ámbar (#D98218 / #F5A623)`: Destaques de avaliações 5.0 estrelas no Google.
- **Tipografia**:
  - `Plus Jakarta Sans`: Textos de interface modernos e legíveis.
  - `Instrument Serif`: Destaques elegantes e sofisticados.

---

## 🚀 Como Executar Localmente

Como se trata de um projeto frontend estático puro (HTML5, CSS3 moderno, Vanilla JavaScript), não é necessária nenhuma etapa de compilação pesada:

### Opção 1: Usando Live Server (VS Code)
1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Servidor HTTP via Python
```bash
python -m http.server 8000
```
Em seguida, acesse no navegador: `http://localhost:8000`

---

## 🛡️ Deploy Seguro e Automatizado (CI/CD)

O projeto conta com automação nativa via **GitHub Actions** (`.github/workflows/deploy.yml`):

1. **GitHub Pages Nativo**:
   - Para ativar o deploy automático no GitHub:
     1. Acesse o repositório em: **Settings > Pages**
     2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
     3. A cada commit ou push na branch `main`, o GitHub fará o build e deploy seguro com certificado HTTPS/SSL automático.
2. **Hospedagem em Vercel ou Netlify (Opcional)**:
   - O projeto é 100% compatível com importação direta no Netlify ou Vercel bastando selecionar o repositório `ahk2001/FLEMING`.

---

## 📞 Contatos e Informações da Autoescola

- **Empresa:** Autoescuela Fleming
- **Localização:** Carrer Doctor Fleming, 8, Bajo 8, 46960 Aldaia, Valencia, Espanha
- **WhatsApp:** [+34 623 78 48 84](https://wa.me/34623784884)
- **Instagram:** [@fleming_autoescuela](https://www.instagram.com/fleming_autoescuela/)

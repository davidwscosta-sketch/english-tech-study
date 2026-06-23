# english-tech-study

> Plataforma de estudo de **vocabulário técnico de inglês** voltada a profissionais de tecnologia (devs, QA, DevOps, dados, etc.).

O objetivo é ajudar quem trabalha com tecnologia a dominar os termos e frases em inglês
que aparecem no dia a dia — em código, documentação, reuniões, pull requests e entrevistas —
através de **flashcards e quizzes** com repetição espaçada.

## ✨ Visão

- **Acesso fácil em qualquer lugar:** aplicação web responsiva / PWA — a mesma URL funciona
  no navegador do celular e do computador, e pode ser "instalada" como app.
- **Foco em TI:** vocabulário organizado por áreas (backend, frontend, DevOps, dados, cloud,
  segurança, soft skills de time, etc.).
- **Aprendizado ativo:** flashcards, quizzes e revisão por repetição espaçada.
- **Progresso pessoal:** acompanha o que você já domina e o que precisa revisar.

## 👤 Público-alvo

Profissionais e estudantes de tecnologia que já programam/trabalham na área e querem
melhorar o inglês **técnico** (não inglês geral).

## 🧱 Stack planejada

| Camada             | Tecnologia                | Motivo                            |
| ------------------ | ------------------------- | --------------------------------- |
| Front-end          | React + TypeScript        | Padrão de mercado, tipagem segura |
| Build              | Vite                      | Rápido, simples, suporte a PWA    |
| Estilo             | Tailwind CSS              | UI responsiva ágil                |
| PWA                | vite-plugin-pwa           | Instalável e uso offline          |
| Persistência (MVP) | LocalStorage / IndexedDB  | Sem backend no início             |
| Conteúdo (MVP)     | Arquivos JSON versionados | Fácil de revisar e contribuir     |
| Deploy             | Vercel ou GitHub Pages    | Gratuito e simples                |

> Backend (contas de usuário, sincronização entre dispositivos) fica para uma etapa posterior,
> caso seja necessário. Veja o [roadmap](docs/ROADMAP.md).

## 🗺️ Roadmap

O plano completo de construção, dividido em etapas com critérios de aprovação, está em
**[docs/ROADMAP.md](docs/ROADMAP.md)**.

## 📌 Status atual

🟢 **Etapa 1 (Fundação) concluída** — projeto Vite + React + TypeScript + Tailwind rodando,
com ESLint, Prettier, Vitest e CI no GitHub Actions. Próximo: Etapa 2 (MVP de flashcards).

## 🚀 Como rodar localmente

Requer **Node.js 20+**.

```bash
npm install      # instala as dependências
npm run dev      # inicia o servidor de desenvolvimento (abra a URL exibida)
```

Outros scripts:

```bash
npm test           # roda os testes (Vitest)
npm run lint       # checa o código (ESLint)
npm run format     # formata o código (Prettier)
npm run build      # gera o build de produção
npm run preview    # serve o build de produção localmente
```

## 🗂️ Estrutura de pastas

```
src/
  components/   # componentes de UI reutilizáveis
  data/         # conteúdo de estudo (vocabulário, frases) em JSON
  lib/          # utilidades e constantes
  App.tsx       # componente raiz
  main.tsx      # ponto de entrada
docs/           # planejamento, roadmap e currículo
```

## 🤝 Como contribuir

Siga o fluxo: instale, crie uma branch, rode `npm run lint` e `npm test` antes de commitar,
e abra um pull request. O CI valida lint, formatação, testes e build automaticamente.

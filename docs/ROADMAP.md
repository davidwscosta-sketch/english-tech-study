# Roadmap — english-tech-study

Plano de construção do projeto dividido em etapas. Cada etapa tem **objetivos**,
**entregáveis** e **critérios de aprovação** (o que precisa estar pronto para avançar
para a próxima etapa).

> **Como usar este documento:** ao final de cada etapa, revisamos os critérios de
> aprovação juntos. Só seguimos para a etapa seguinte após o "ok".

---

## Resumo das decisões

| Tema | Decisão |
|------|---------|
| Objetivo | Estudo de **vocabulário técnico de TI** em inglês |
| Plataforma | **Web responsiva / PWA** (celular + computador, mesma URL) |
| Stack | React + TypeScript + Vite + Tailwind CSS |
| Persistência (MVP) | Local no dispositivo (LocalStorage/IndexedDB) |
| Conteúdo (MVP) | Arquivos JSON versionados no repositório |
| Deploy | Vercel ou GitHub Pages (gratuito) |
| Foco do conteúdo | Inglês técnico de IA/TI, centrado no **Claude Code** |
| IA avaliadora | **Heurística local** primeiro; API Claude depois (opcional) |

> 📚 O **método de estudo e a estrutura de conteúdo** estão detalhados em
> [CURRICULO.md](CURRICULO.md). A trilha-semente está em
> [conteudo/claude-code.md](conteudo/claude-code.md).

---

## Etapa 0 — Planejamento ✅ (atual)

**Objetivo:** alinhar visão, escopo e direção técnica.

**Entregáveis:**
- [x] README com visão, público-alvo e stack
- [x] Este roadmap com etapas e critérios

**Critério de aprovação:** você aprova o escopo e a stack descritos acima.

---

## Etapa 1 — Fundação do projeto

**Objetivo:** ter um projeto que roda localmente, com qualidade e CI configurados.

**Entregáveis:**
- [ ] Inicializar app Vite + React + TypeScript
- [ ] Configurar Tailwind CSS
- [ ] Configurar ESLint + Prettier
- [ ] Configurar testes (Vitest + Testing Library)
- [ ] CI no GitHub Actions (lint + testes em cada push/PR)
- [ ] Estrutura de pastas definida (`src/components`, `src/data`, `src/lib`, etc.)
- [ ] Tela inicial "Hello" rodando no navegador

**Critério de aprovação:** `npm run dev` abre o app, `npm test` e `npm run lint` passam,
e o CI fica verde.

---

## Etapa 2 — MVP de estudo (flashcards)

**Objetivo:** o núcleo funcional — estudar vocabulário com flashcards.

**Entregáveis:**
- [ ] Modelo de dados do card (termo EN, tradução PT, exemplo de uso, categoria, nível)
- [ ] Conteúdo inicial em JSON a partir de [conteudo/claude-code.md](conteudo/claude-code.md)
      (frases de contexto, slash commands, vocabulário por categoria)
- [ ] Tela de flashcards (virar carta, marcar "sabia" / "não sabia")
- [ ] Navegação entre cards de um baralho/categoria
- [ ] Layout responsivo (funciona bem no celular e no desktop)

**Critério de aprovação:** dá para abrir uma categoria e estudar os cards de ponta a ponta
no celular e no computador.

> Telas-alvo do produto (6 áreas) e rotina diária dos 4 blocos: ver [CURRICULO.md](CURRICULO.md).

---

## Etapa 3 — Progresso e revisão inteligente

**Objetivo:** transformar em ferramenta de estudo real, com memória de progresso.

**Entregáveis:**
- [ ] Salvar progresso localmente (LocalStorage/IndexedDB)
- [ ] Repetição espaçada simples (ex.: algoritmo tipo Leitner/SM-2 enxuto)
- [ ] Quiz de múltipla escolha como modo alternativo de estudo
- [ ] Tela de estatísticas (termos dominados, a revisar, sequência de dias)

**Critério de aprovação:** o progresso persiste entre sessões e os cards a revisar
aparecem de acordo com o desempenho.

---

## Etapa 4 — PWA e publicação

**Objetivo:** acesso fácil em qualquer dispositivo, "instalável".

**Entregáveis:**
- [ ] Configurar PWA (manifest + service worker via vite-plugin-pwa)
- [ ] Funcionar offline (conteúdo e progresso)
- [ ] Ícones e tela de splash
- [ ] Deploy automático (Vercel ou GitHub Pages) a cada merge na branch principal

**Critério de aprovação:** dá para abrir a URL no celular, "adicionar à tela inicial"
e usar offline.

---

## Etapa 5 — Expansão de conteúdo e recursos

**Objetivo:** crescer em conteúdo e qualidade de aprendizado.

**Entregáveis (priorizar depois):**
- [ ] Mais categorias e mais termos por área (backend, frontend, DevOps, dados, cloud, segurança)
- [ ] Textos guiados com glossário e biblioteca de mídia (vídeos/filmes) marcada por
      **legenda PT** e nível, com dica de legenda dupla (Language Reactor)
- [ ] IA avaliadora real via **API da Claude** (correção de frases, exercícios personalizados)
- [ ] Áudio/pronúncia dos termos (Web Speech API ou áudios)
- [ ] Gamificação (pontos, conquistas, metas diárias)
- [ ] Busca e favoritos
- [ ] (Opcional) Backend com contas para sincronizar progresso entre dispositivos

**Critério de aprovação:** definido no início da etapa, conforme prioridades do momento.

---

## Fora de escopo por enquanto

- Inglês geral (foco é estritamente vocabulário técnico de TI)
- App nativo separado para iOS/Android (o PWA cobre o acesso mobile)
- Conteúdo gerado por IA em tempo real (conteúdo inicial é curado/versionado)

---

## Próximo passo

Aprovar a **Etapa 0** e autorizar o início da **Etapa 1 (Fundação)**.

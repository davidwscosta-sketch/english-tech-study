# Currículo & Estrutura de Formação — english-tech-study

Este documento define **o método de estudo** e **a estrutura de conteúdo** do app.
Foi consolidado a partir do planejamento do usuário e de uma estrutura anterior
(prototipada em outra ferramenta), reaproveitando a parte de formação.

> **Foco do projeto:** inglês técnico de **IA / TI**, centrado no uso do **Claude Code**,
> a ferramenta principal do usuário.

---

## Perfil do estudante

- Iniciante absoluto em inglês.
- Trabalha com tecnologia: automação de clínicas, vigilância em saúde, dados
  epidemiológicos, agentes de IA (n8n, Supabase, VS Code, GitHub, Claude Code).
- Pouco tempo por dia (10–15 min).
- Prefere estrutura organizada, estudo prático e apoio de IA, em vez de gramática pesada.

---

## Rotina diária (10–15 min) — 4 blocos

Um "micro-treino" diário, como um aquecimento. Pode ser feito no celular.

| Bloco                 | Tempo   | O que fazer                                                         |
| --------------------- | ------- | ------------------------------------------------------------------- |
| 1. Vocabulário tech   | 4–5 min | 5 palavras novas, com tradução + frase no contexto do usuário       |
| 2. Leitura rápida     | 3–4 min | 1 parágrafo curto (glossário/blog/manchete tech)                    |
| 3. Escuta + repetição | 3–5 min | 2–3 min de vídeo com legenda, com _shadowing_ (repetir em voz alta) |
| 4. Micro-produção     | 1–2 min | Escrever/falar 2–3 frases sobre o próprio dia em inglês             |

Uma vez por semana: gravar 1 min de áudio explicando o trabalho em inglês simples.

---

## Temas semanais (progressão)

- **Semana 1** — Termos básicos de código (`code`, `bug`, `function`, `variable`, `loop`...)
- **Semana 2** — Interfaces e comandos (`login`, `dashboard`, `upload`, `database`, `API`...)
- **Semana 3** — Infraestrutura / web (`server`, `client`, `framework`, `bandwidth`...)
- **Semana 4** — Negócios digitais (`client`, `meeting`, `report`, `dashboard`...)
- **Trilha contínua** — Claude Code (slash commands, fluxo de PR, deploy)

---

## Categorias de vocabulário

1. **Programação** — code, bug, function, loop, variable, array, object, error
2. **IA** — prompt, agent, model, context, token, training
3. **Web** — login, dashboard, upload, download, settings, request
4. **Dados** — database, table, query, backup, dataset
5. **Automação** — workflow, trigger, deploy, integration, schedule
6. **Claude Code** — commit, push, branch, pull request, merge, diff, repo (ver
   [conteudo/claude-code.md](conteudo/claude-code.md))

Cada palavra tem: **termo EN · tradução PT · frase de exemplo no contexto do usuário · categoria · nível.**

---

## Mapa de telas (6 áreas)

Reaproveitado da estrutura anterior, adaptado para PWA.

1. **Painel** — visão do dia, sequência (streak), atalho para estudar.
2. **Plano diário** — os 4 blocos da rotina, com check-in.
3. **Vocabulário** — navegar/filtrar por categoria, flashcards.
4. **Textos guiados** — leituras curtas com glossário.
5. **IA avaliadora** — nota e recomendações (ver abaixo).
6. **Meu system personalizado** — o "prompt system" de tutor + preferências.

---

## IA avaliadora — começa heurística (sem API)

Primeira versão: **cálculo local** no próprio app, **sem custo e sem API externa**.

- Gera **nota 0–100** a partir de: tempo estudado, tarefas concluídas e produção escrita.
- Classifica: **excelente / bom / inicial / fraco**.
- Devolve: **ponto forte**, **erro principal** e **"estudo de amanhã" em 10 min**.

Evolução futura (opcional): conectar à **API da Claude (Anthropic)** para análise real,
correção de frases e geração de exercícios personalizados.

---

## Prompt System (tutor pessoal)

Texto pronto, dentro do app, para transformar qualquer IA em tutor de inglês técnico:

- Respostas curtas e didáticas.
- 5 palavras por vez, com tradução e exemplo no contexto de saúde/IA/automação.
- Um mini texto por dia.
- Correção gentil das frases do usuário.

---

## Biblioteca de mídia — requisito de legendas

Para "ouvir em inglês entendendo a palavra", a biblioteca de podcasts/vídeos/filmes
seguirá estas regras:

- **Priorizar material com legenda em português disponível.**
- Recomendar **legenda dupla** (inglês + português ao mesmo tempo) via extensão
  **Language Reactor** (YouTube e Netflix).
- Marcar cada item com: tem legenda PT? (sim/não) e nível (iniciante/intermediário).
- Para iniciante: **priorizar vídeos do YouTube** (com legenda) em vez de podcasts
  só de áudio (que normalmente não têm legenda).

Curadoria inicial em [conteudo/claude-code.md](conteudo/claude-code.md).

# Trilha: Inglês para Claude Code

Conteúdo-semente da trilha principal do app: inglês técnico focado no uso do **Claude Code**.
Formato bilíngue (🇬🇧 EN / 🇧🇷 PT). Este é o ponto de partida — o conteúdo cresce com o tempo.

> Esta trilha é uma **amostra inicial** (~5% do total planejado). O app terá centenas de
> frases, todo o vocabulário por categoria, textos guiados, quizzes e flashcards.

---

## 1. Frases de contexto — construindo um site/produto

| 🇬🇧 English                                         | 🇧🇷 Português                                            |
| -------------------------------------------------- | ------------------------------------------------------- |
| Let's **build** a web app from scratch.            | Vamos construir um app web do zero.                     |
| **Set up** the project structure first.            | Configure a estrutura do projeto primeiro.              |
| Create a **landing page** with a contact form.     | Crie uma página inicial com um formulário de contato.   |
| **Fix** this bug in the login function.            | Conserte este bug na função de login.                   |
| **Refactor** this code to make it cleaner.         | Refatore este código para deixá-lo mais limpo.          |
| Add **dark mode** to the dashboard.                | Adicione modo escuro ao painel.                         |
| Run the tests and make sure they **pass**.         | Rode os testes e garanta que eles passem.               |
| **Commit** the changes and **push** to the branch. | Faça o commit das mudanças e envie para a branch.       |
| **Deploy** the app to production.                  | Publique o app em produção.                             |
| Open a **pull request** for review.                | Abra um pull request para revisão.                      |
| This feature is **not working** as expected.       | Esta funcionalidade não está funcionando como esperado. |
| Can you **explain** what this file does?           | Você pode explicar o que este arquivo faz?              |

---

## 2. Slash commands (`/`) mais importantes

| Comando            | 🇬🇧 Significado                  | 🇧🇷 O que faz / quando usar                                     |
| ------------------ | ------------------------------- | -------------------------------------------------------------- |
| `/help`            | help = ajuda                    | Lista todos os comandos. Use quando esquecer algum.            |
| `/clear`           | clear = limpar                  | Limpa a conversa e o contexto. Use ao começar uma tarefa nova. |
| `/compact`         | compact = compactar             | Resume a conversa longa para liberar contexto.                 |
| `/init`            | initialize = inicializar        | Cria o `CLAUDE.md` documentando o projeto. Use uma vez.        |
| `/model`           | model = modelo                  | Troca o modelo de IA.                                          |
| `/config`          | config = configuração           | Abre as configurações (tema etc.).                             |
| `/review`          | review = revisar                | Revisa um pull request do GitHub.                              |
| `/code-review`     | code review = revisão de código | Revisa o diff atual atrás de bugs. Use antes de commitar.      |
| `/security-review` | security = segurança            | Procura falhas de segurança nas mudanças.                      |
| `/agents`          | agents = agentes                | Gerencia subagentes (ajudantes especializados).                |
| `/mcp`             | —                               | Gerencia conexões MCP (GitHub, Notion etc.).                   |
| `/cost`            | cost = custo                    | Mostra quanto a sessão consumiu.                               |
| `/resume`          | resume = retomar                | Retoma uma conversa anterior.                                  |
| `/fast`            | fast = rápido                   | Liga/desliga o modo rápido.                                    |
| `/loop`            | loop = repetir em ciclo         | Roda uma tarefa repetidamente num intervalo (ver abaixo).      |

**Pronúncia:** commit = "kâ-MÍT" · deploy = "di-PLÓI" · branch = "brentch" · queue = "kiú".

---

## 3. `/loop` em detalhe

**Tradução:** loop = laço / ciclo que se repete.
**O que é:** roda um prompt ou comando de novo e de novo, num intervalo de tempo.

| 🇬🇧 Use case                                | 🇧🇷 Uso no projeto                               |
| ------------------------------------------ | ----------------------------------------------- |
| `/loop 5m /code-review`                    | A cada 5 minutos, revise o código.              |
| Run this every 10 minutes.                 | Rode isto a cada 10 minutos.                    |
| Keep checking the deploy until it's ready. | Continue checando o deploy até ficar pronto.    |
| Poll the CI status every few minutes.      | Verifique o status do CI a cada poucos minutos. |

**Quando usar:** monitorar deploy, checar se o CI ficou verde, repetir uma rotina.
**Quando NÃO usar:** tarefas de uma vez só (_one-off_).
**Vocabulário ligado:** interval (intervalo) · recurring (recorrente) · poll (consultar
repetidamente) · trigger (gatilho / disparar).

---

## 4. Vocabulário-chave do dia a dia

`prompt` (instrução) · `context` (contexto) · `branch` (ramo do código) ·
`commit` (salvar mudança) · `push` (enviar) · `pull request / PR` (pedido de junção) ·
`merge` (juntar) · `diff` (diferença entre versões) · `agent` (agente) · `tool` (ferramenta) ·
`repository / repo` (repositório) · `deploy` (publicar) · `build` (construir/compilar) ·
`debug` (depurar) · `feature` (funcionalidade) · `issue` (problema/tarefa).

---

## 5. Mídia recomendada (com nota sobre legendas)

> **Regra do app:** priorizar material com **legenda PT**. Para legenda dupla (EN + PT ao
> mesmo tempo), usar a extensão **Language Reactor** no YouTube e Netflix.

**Vídeos (YouTube — têm legenda, melhores para iniciante):**

- Canal oficial da **Anthropic** — tutoriais de Claude Code, Cowork e novidades.
- Entrevistas com **Dario Amodei** (Dwarkesh Podcast, Lex Fridman) — versões em vídeo.
- **AlphaGo** (2017) — documentário, disponível no YouTube.

**Filmes / documentários (com legenda PT):**

- The Thinking Game (2024) · Coded Bias (2020) · Do You Trust This Computer? (2018).

**Podcasts (só áudio — sem legenda; deixar para nível mais avançado):**

- Latent Space · Practical AI · The AI Daily Brief · Hard Fork (NYT).

**Técnica de estudo:** assista 2–3 min com legenda → pause → repita uma frase em voz alta
(_shadowing_) → anote 2 palavras novas.

---

> ⚠️ Observação honesta: **não há documentário dedicado só ao Claude Code**. O conteúdo
> mais direto e atualizado é o **canal oficial da Anthropic no YouTube**.

# Trilha: Inglês para GitHub

Vocabulário dos **espaços (abas/áreas)** e dos **termos** que você encontra no GitHub —
o ambiente onde você trabalha com o Claude Code todos os dias.
Formato bilíngue (🇬🇧 EN / 🇧🇷 PT).

> Faz par com a trilha [claude-code.md](claude-code.md). Juntas, cobrem o fluxo completo:
> escrever código com o Claude Code → versionar e revisar no GitHub.

---

## 1. Espaços do GitHub (as abas de um repositório)

| 🇬🇧 Aba / espaço   | 🇧🇷 O que é                                             |
| ----------------- | ------------------------------------------------------ |
| **Code**          | Código — os arquivos do repositório.                   |
| **Issues**        | Problemas / tarefas — bugs e ideias a fazer.           |
| **Pull requests** | Pedidos de junção — mudanças propostas para revisão.   |
| **Discussions**   | Discussões — conversas abertas da comunidade.          |
| **Actions**       | Ações — automações de CI/CD (testes, build, deploy).   |
| **Projects**      | Projetos — quadros tipo kanban para organizar tarefas. |
| **Wiki**          | Documentação extensa do projeto.                       |
| **Security**      | Segurança — alertas e políticas.                       |
| **Insights**      | Métricas — atividade, contribuidores, gráficos.        |
| **Settings**      | Configurações do repositório.                          |
| **Releases**      | Lançamentos — versões publicadas do software.          |
| **Branches**      | Ramos — linhas de trabalho paralelas do código.        |

---

## 2. Termos essenciais do GitHub

| 🇬🇧 Termo              | 🇧🇷 Significado                               |
| --------------------- | -------------------------------------------- |
| **Repository (repo)** | Repositório — o projeto e seu histórico.     |
| **Fork**              | Cópia do repositório na sua conta.           |
| **Clone**             | Baixar o repositório para a sua máquina.     |
| **Star**              | Estrela — marcar como favorito.              |
| **Watch**             | Observar — receber notificações do repo.     |
| **Branch**            | Ramo — linha de desenvolvimento.             |
| **Commit**            | Mudança salva no histórico.                  |
| **Merge**             | Juntar uma branch em outra.                  |
| **Rebase**            | Reaplicar commits sobre outra base.          |
| **Pull request (PR)** | Pedido de junção, aberto para revisão.       |
| **Draft**             | Rascunho — PR ainda não pronto para revisão. |
| **Review**            | Revisão do código por outra pessoa.          |
| **Approve**           | Aprovar a PR.                                |
| **Request changes**   | Pedir mudanças antes de aprovar.             |
| **Merge conflict**    | Conflito quando duas mudanças se chocam.     |
| **Issue**             | Problema/tarefa registrada.                  |
| **Label**             | Etiqueta para classificar (bug, feature...). |
| **Milestone**         | Marco — grupo de issues com um objetivo.     |
| **Assignee**          | Responsável designado pela tarefa.           |
| **Reviewer**          | Pessoa designada para revisar.               |
| **Maintainer**        | Mantenedor do projeto.                       |
| **Contributor**       | Quem contribui com o projeto.                |
| **Release / Tag**     | Lançamento / marca de versão.                |
| **Workflow**          | Fluxo de automação (no Actions).             |
| **Runner**            | Máquina que executa o workflow.              |

---

## 3. Símbolos que você digita no GitHub

| 🇬🇧 Símbolo        | 🇧🇷 Uso                                                |
| ----------------- | ----------------------------------------------------- |
| `@usuário`        | **Mention** — mencionar/avisar alguém.                |
| `#123`            | **Reference** — referenciar uma issue/PR pelo número. |
| `- [ ]` / `- [x]` | **Task list** — lista de tarefas (a fazer / feita).   |
| ` ``` `           | **Code block** — bloco de código.                     |
| `Closes #123`     | Fecha a issue 123 automaticamente ao dar merge.       |

---

## 4. Frases de contexto (revisão de PR)

| 🇬🇧 English                             | 🇧🇷 Português                                  |
| -------------------------------------- | --------------------------------------------- |
| **LGTM** (Looks Good To Me).           | Pra mim está ótimo.                           |
| Could you **add a test** for this?     | Você pode adicionar um teste para isto?       |
| Please **rebase onto main**.           | Por favor, faça rebase na main.               |
| This **needs changes** before merging. | Isto precisa de mudanças antes do merge.      |
| **Nit:** small style issue.            | Detalhe pequeno (nitpick): questão de estilo. |
| Can you **squash your commits**?       | Você pode juntar seus commits num só?         |
| Please **resolve the merge conflict**. | Por favor, resolva o conflito de merge.       |
| **Approved** ✅ — ready to merge.      | Aprovado — pronto para o merge.               |
| I left a few **comments** on the diff. | Deixei alguns comentários no diff.            |
| **Good catch!**                        | Boa observação! / Bem visto!                  |

---

## 5. Botões e rótulos da interface

`New` (novo) · `Fork` · `Star` (favoritar) · `Watch` (observar) · `Code` (clonar) ·
`Create pull request` (criar PR) · `Merge pull request` (juntar PR) ·
`Squash and merge` (juntar comprimindo) · `Close` (fechar) · `Reopen` (reabrir) ·
`Comment` (comentar) · `Submit review` (enviar revisão) · `Files changed` (arquivos alterados) ·
`Conversation` (conversa) · `Commits` · `Checks` (verificações de CI).

---

**Técnica de estudo:** abra um repositório real (até o nosso!) e tente **nomear cada aba em
inglês** antes de clicar. Depois, leia 1 PR de ponta a ponta e anote 2 termos novos.

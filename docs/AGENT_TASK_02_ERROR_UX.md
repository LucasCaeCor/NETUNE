# AGENT_TASK_02_ERROR_UX.md

# Tarefa 02 — Melhorar UX das mensagens de erro do NETUNE

## Objetivo

Melhorar a experiência das mensagens exibidas pelo NETUNE quando uma regra falha.

O foco desta tarefa não é mudar a lógica do motor, nem criar novas regras, nem alterar o escopo do produto.

O foco é tornar cada erro mais claro, útil e acionável para o desenvolvedor que recebeu o bloqueio no Pull Request.

---

## Contexto

O core técnico do NETUNE já foi validado.

Já está funcionando corretamente:

* detecção de violações
* execução via GitHub Actions
* bloqueio de PR quando necessário
* diferenciação entre código correto e incorreto

Neste momento, o gargalo não é mais o motor técnico.

O gargalo é a experiência do usuário ao receber o erro.

Hoje, parte das mensagens ainda soa como saída de scanner técnico.
O objetivo agora é fazer essas mensagens parecerem mensagens de produto.

---

## Problema a Resolver

Uma mensagem ruim gera este efeito:

* o PR falha
* o usuário não entende claramente o motivo
* o usuário não sabe o que fazer
* o produto parece “punitivo” em vez de útil

Uma mensagem boa gera este efeito:

* o PR falha
* o usuário entende o problema
* o usuário entende por que a regra existe
* o usuário sabe como corrigir rapidamente

---

## Objetivo de Produto

Transformar mensagens de finding em mensagens com valor real para o usuário.

Cada mensagem deve responder, de forma curta e clara:

1. o que aconteceu
2. por que isso é um problema
3. como corrigir

---

## Escopo

Esta tarefa deve trabalhar primeiro nas regras mais importantes e já validadas do projeto.

Prioridade inicial:

* `rules/service/no-http-in-service.yml`
* `rules/backend/no-db-in-controller.yml`
* `rules/backend/no-business-in-controller.yml`
* `rules/backend/no-console-log.yml`
* `rules/database/no-select-star.yml`
* `rules/backend/no-empty-catch.yml`
* `rules/backend/no-try-without-catch.yml`

Se houver tempo e consistência, pode expandir para as demais regras já existentes.

---

## Restrições

Não fazer nesta tarefa:

* não mudar a lógica dos patterns sem necessidade absoluta
* não alterar severidade sem justificativa forte
* não criar novas regras
* não reorganizar o repositório
* não mexer em instalação, CLI ou workflow
* não expandir escopo para IA, dashboard, SaaS ou novas features

Esta é uma tarefa de UX de mensagem, não de arquitetura de produto.

---

## Tom das Mensagens

As novas mensagens devem ser:

* técnicas, mas humanas
* diretas
* curtas
* profissionais
* úteis
* sem tom agressivo
* sem tom robótico
* sem excesso de texto

Evitar:

* mensagem seca demais
* mensagem genérica
* mensagem sem orientação
* mensagem vaga
* texto longo demais

---

## Estrutura Desejada por Regra

Sempre que possível, a mensagem final deve ter esta estrutura lógica:

**Mensagem principal**
Uma frase curta dizendo o que está errado.

**Motivo**
Uma frase curta explicando por que isso é problema.

**Como corrigir**
Uma frase curta com ação prática.

Exemplo de qualidade desejada:

Em vez de:

`Service cannot use response helpers`

Preferir algo como:

`Service não pode usar res.json/res.send.
Motivo: services devem retornar dados, não responder HTTP.
Como corrigir: retorne o objeto no service e use res.json no controller.`

---

## Critério de Qualidade

A mensagem final é boa se, ao olhar o finding no PR, um desenvolvedor conseguir responder imediatamente:

* o que eu fiz de errado?
* por que isso existe?
* o que devo mudar agora?

Se o usuário ainda ficar em dúvida, a mensagem ainda não está boa o suficiente.

---

## Formato de Trabalho Esperado

Antes de implementar, o agente deve me mostrar:

1. entendimento da tarefa
2. lista de arquivos que pretende alterar
3. proposta inicial de melhoria para pelo menos 3 regras

Só depois da aprovação deve aplicar em todos os arquivos do escopo.

---

## Entrega Esperada

Ao final da tarefa, o agente deve entregar:

1. lista de arquivos alterados
2. mensagem antiga vs mensagem nova
3. breve justificativa de consistência de tom
4. resumo do impacto na experiência do desenvolvedor

---

## Definição de Pronto

A tarefa está pronta quando:

* as mensagens principais das regras prioritárias estiverem melhores
* houver consistência de tom entre elas
* o conteúdo estiver mais claro e útil
* o usuário souber como corrigir o erro
* nenhuma lógica essencial da regra tiver sido quebrada

---

## Regra Central

O objetivo não é “soar bonito”.

O objetivo é:

**fazer o usuário entender o erro e corrigir rápido.**

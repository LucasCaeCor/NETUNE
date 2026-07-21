

# AGENT_REVIEW_01_ERROR_UX.md

# Revisão 01 — Validar se as mensagens de erro do NETUNE ficaram com cara de produto

## Objetivo

Revisar a entrega da melhoria de mensagens de erro e verificar se o resultado final realmente melhorou a experiência do usuário.

Esta revisão não é para criar novas regras.

Esta revisão não é para mudar escopo.

Ela existe para responder uma pergunta simples:

**as mensagens agora parecem úteis para um desenvolvedor real, ou ainda parecem apenas saída bruta de scanner?**

---

## Contexto

O NETUNE já está tecnicamente validado.

Agora a prioridade é experiência do desenvolvedor.

As mensagens de erro são parte do produto, não apenas parte do motor técnico.

Se elas estiverem ruins:

* o produto parece hostil
* o valor percebido cai
* a adoção fica pior

Se elas estiverem boas:

* o produto ensina
* o bloqueio faz sentido
* o usuário entende o benefício da ferramenta

---

## Missão da Revisão

Avaliar as mensagens novas e responder com honestidade:

* elas estão claras?
* elas ajudam de verdade?
* elas parecem profissionais?
* elas têm tom consistente?
* elas estão curtas o suficiente?
* elas dizem como corrigir?

---

## O que deve ser revisado

Revisar prioritariamente as mensagens das regras principais:

* `rules/service/no-http-in-service.yml`
* `rules/backend/no-db-in-controller.yml`
* `rules/backend/no-business-in-controller.yml`
* `rules/backend/no-console-log.yml`
* `rules/database/no-select-star.yml`
* `rules/backend/no-empty-catch.yml`
* `rules/backend/no-try-without-catch.yml`

Também pode revisar outras regras alteradas na mesma tarefa.

---

## Critérios de Revisão

Para cada mensagem, avalie:

### 1. Clareza

A mensagem deixa óbvio o que aconteceu?

### 2. Motivo

A mensagem explica por que aquilo é um problema?

### 3. Ação

A mensagem dá uma pista concreta de correção?

### 4. Tom

A mensagem parece produto profissional ou saída crua de linter?

### 5. Tamanho

A mensagem está curta o suficiente para PR e CI?

### 6. Consistência

As mensagens parecem escritas pela mesma ferramenta?

---

## Sinais de Mensagem Fraca

Uma mensagem ainda está ruim se:

* só descreve o erro sem explicar
* soa genérica demais
* parece texto de ferramenta interna
* usa linguagem excessivamente fria
* é longa demais
* não diz o que fazer
* mistura tons diferentes entre regras

---

## Sinais de Mensagem Boa

Uma mensagem está boa se:

* o usuário entende o erro em segundos
* o motivo faz sentido
* a correção sugerida é prática
* o texto parece produto, não gambiarra
* o tom é consistente com as demais mensagens

---

## Formato da Revisão

O agente deve responder neste formato:

### 1. Avaliação Geral

Uma visão curta e honesta da qualidade geral das mensagens.

### 2. Pontos Fortes

O que melhorou de verdade.

### 3. Pontos Fracos

O que ainda está com cara de scanner ou confuso.

### 4. Revisão por Regra

Para cada regra importante:

* mensagem atual
* nota de clareza
* nota de utilidade
* nota de tom
* sugestão de melhoria, se houver

### 5. Consistência de Produto

Dizer se o conjunto final parece uma ferramenta de produto coerente.

### 6. Veredito Final

Escolher uma das opções:

* aprovado
* aprovado com ajustes
* reprovado

---

## Restrição da Revisão

Esta revisão deve priorizar julgamento crítico e qualidade de UX.

Não entrar em:

* criação de novas regras
* alteração de arquitetura
* expansão de escopo
* features futuras

O objetivo aqui é revisão de linguagem e experiência.

---

## Regra Central da Revisão

Se a mensagem não ajuda o desenvolvedor a agir, ela ainda não está boa.

---

## Resultado Esperado

Ao final desta revisão, deve ficar claro se:

* as mensagens já podem ser consideradas parte de um produto profissional
  ou
* ainda precisam de ajustes para deixar o NETUNE com mais valor percebido

---

## Pergunta Final

A revisão inteira deve ser guiada por esta pergunta:

**“Se eu recebesse esse erro em um PR real, eu entenderia rapidamente o problema e o que fazer?”**

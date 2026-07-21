# SPRINT_01.md

# NETUNE — Sprint 01

## Objetivo da Sprint

Transformar o core técnico validado do NETUNE em uma experiência inicial de produto mais clara, mais fácil de instalar e mais fácil de recomendar.

Esta sprint não é sobre expandir muito o escopo.

Ela é sobre consolidar a versão funcional atual e melhorar:

* onboarding
* clareza
* percepção de valor
* primeira experiência de uso

---

## Contexto Atual

O NETUNE já provou que funciona tecnicamente.

Já está validado que:

* regras detectam violações reais
* CI bloqueia PR corretamente
* código correto passa
* código incorreto falha
* instalação já existe
* repositório público já existe

O problema agora não é mais “funciona ou não”.

O problema agora é:

**como fazer outra pessoa instalar, entender e valorizar o NETUNE rapidamente.**

---

## Meta Principal da Sprint

Ao final desta sprint, o NETUNE deve estar melhor em três pontos:

1. instalação
2. mensagens de erro
3. material de apresentação/uso

---

## Escopo da Sprint

### Dentro do escopo

* melhorar mensagens das regras
* revisar onboarding da CLI/script
* revisar README
* revisar fluxo de primeiro uso
* preparar material para usuário real testar

### Fora do escopo

* dashboard
* backend SaaS
* autenticação
* IA complexa
* auto-fix
* integrações avançadas
* refatoração ampla do projeto

---

## Tarefas da Sprint

## Tarefa 1 — Melhorar UX das mensagens de erro

### Objetivo

Fazer os findings parecerem mensagens de produto, e não apenas saída crua de scanner.

### Resultado esperado

* mensagens mais claras
* mensagens mais úteis
* mensagens com orientação de correção

### Arquivo de apoio

* `docs/AGENT_TASK_02_ERROR_UX.md`
* `docs/AGENT_REVIEW_01_ERROR_UX.md`

---

## Tarefa 2 — Revisar a experiência de instalação

### Objetivo

Garantir que a instalação atual esteja simples, verdadeira e bem documentada.

### Resultado esperado

* fluxo oficial de instalação definido
* README sem ambiguidade
* instruções corretas para uso atual
* redução de fricção para primeiro uso

### Pontos de atenção

* CLI atual
* `install.sh`
* documentação de uso
* compatibilidade entre os dois fluxos

---

## Tarefa 3 — Limpar resíduos de teste do produto

### Objetivo

Garantir que o repositório principal contenha só o que faz parte do produto.

### Resultado esperado

* remoção de arquivos de teste desnecessários
* remoção de exemplos confusos
* estrutura mais limpa
* aparência mais profissional do repositório

---

## Tarefa 4 — Melhorar o README como entrada de produto

### Objetivo

Fazer o README comunicar valor rápido e instruir instalação sem confusão.

### Resultado esperado

* headline forte
* instalação correta
* explicação simples do que o produto faz
* exemplos de erro e valor real
* documentação alinhada ao estágio atual do produto

---

## Tarefa 5 — Preparar validação com usuários reais

### Objetivo

Deixar o projeto pronto para ser testado por desenvolvedores externos.

### Resultado esperado

* mensagem curta de convite
* checklist de teste
* instrução mínima de uso
* material para coleta de feedback

---

## Ordem Recomendada de Execução

1. melhorar mensagens de erro
2. revisar experiência de instalação
3. limpar resíduos de teste
4. revisar README
5. preparar validação externa

---

## Critério de Sucesso da Sprint

A sprint será considerada bem-sucedida se, ao final:

* o NETUNE estiver mais fácil de instalar
* os erros estiverem mais claros
* o README estiver mais coerente
* o projeto estiver mais limpo
* estiver pronto para ser enviado a usuários reais

---

## Regra de Execução da Sprint

Se uma tarefa não melhorar pelo menos um destes pontos, ela não é prioridade agora:

* clareza
* adoção
* confiança
* onboarding
* valor percebido

---

## Resultado Esperado de Produto

Ao final da Sprint 01, o NETUNE deve parecer menos um experimento técnico e mais um produto inicial utilizável.

---

## Regra Final

Esta sprint não existe para “impressionar”.

Ela existe para tornar o produto:

* mais claro
* mais utilizável
* mais recomendável

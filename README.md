# 🚀 NETUNE — The Engineering Intelligence Platform

> **Pare de aceitar código ruim no seu projeto.**
>
> NETUNE bloqueia automaticamente violações de arquitetura antes do código entrar em produção.

---

## ⚡ Instalação em Segundos

**Via CLI (Oficial):**

```bash
npx github:LucasCaeCor/NETUNE init
```

*(Ou `npx netune init` após publicação no registro npm)*

**Via Script Bash:**

```bash
curl -sL https://raw.githubusercontent.com/LucasCaeCor/NETUNE/main/install.sh | bash
```

---

## 🔥 O Problema

Em praticamente todo projeto:

* Controllers viram um caos
* Services começam a responder HTTP
* Banco é acessado de qualquer lugar
* Padrões são ignorados com o tempo

👉 Resultado: código difícil de manter, bugs e retrabalho.

---

## 💡 A Solução

O **NETUNE** atua como um guardião automático:

✔ Analisa seu código em Pull Requests
✔ Detecta violações de arquitetura
✔ Bloqueia merges inválidos
✔ Garante padrão consistente

---

## ⚙️ O Que Ele Bloqueia

Exemplos reais:

### ❌ Controller acessando banco diretamente

```ts
prisma.user.findMany();
```

---

### ❌ Service usando HTTP

```ts
res.json({ ok: true });
```

---

### ❌ Código sujo em produção

```ts
console.log("debug");
```

---

## ✅ Resultado

Com NETUNE:

* Arquitetura respeitada automaticamente
* Código mais limpo
* Menos revisão manual
* Time mais consistente

---

## 🚀 Instalação Rápida

### Opção 1: Via CLI (Recomendado)

Rode no diretório raiz do seu projeto Node/TypeScript:

```bash
npx github:LucasCaeCor/NETUNE init
```

*Nota: Se o pacote `netune` for publicado no registro npm, você também poderá utilizar `npx netune init`.*

---

### Opção 2: Via Script Bash

```bash
curl -sL https://raw.githubusercontent.com/LucasCaeCor/NETUNE/main/install.sh | bash
```

---

### Opção 3: Manualmente

1. Copie a pasta `rules/` para a raiz do seu projeto.
2. Copie o arquivo `.github/workflows/semgrep.yml` para `.github/workflows/semgrep.yml`.

---

### 🛡️ Comportamento de Segurança e Atualização

Ao executar o instalador (`init`), o NETUNE copia os diretórios `rules/` e `.github/workflows/semgrep.yml`. Caso o projeto alvo já possua essas pastas/arquivos, o instalador atualizará o conteúdo e emitirá uma mensagem informando que os arquivos existentes foram atualizados.

---

### Pronto!

Agora todo Pull Request no seu repositório será analisado automaticamente via GitHub Actions.

---

## 🔍 Como Funciona

NETUNE usa:

* **Semgrep** → análise estática de código
* **Regras customizadas** → sua arquitetura definida
* **GitHub Actions** → execução automática no PR

---

## 🧠 Filosofia

> “Padrão que não é automatizado, é ignorado.”

---

## 🛣️ Roadmap

### 🔹 Versão atual (MVP)

* Validação de arquitetura via regras
* Integração com GitHub CI
* Bloqueio automático de PR

---

### 🔹 Próximos passos

* 🤖 AI revisando código automaticamente
* ⚡ Sugestão de correções no PR
* 📊 Dashboard de qualidade
* 🧩 Pacotes de regras por arquitetura

---

## 💰 Visão de Produto

NETUNE evolui para:

👉 Plataforma de governança de código
👉 Padrões prontos para empresas
👉 Qualidade automática em escala

---

## 🤝 Contribuindo

Quer melhorar as regras ou arquitetura?

1. Fork o projeto
2. Crie sua branch
3. Abra um Pull Request

---

## 📌 Autor

Desenvolvido por **Lucas Caetano**

---

## ⭐ Se isso te ajudou

Deixa uma estrela no repositório — isso ajuda o projeto crescer 🚀

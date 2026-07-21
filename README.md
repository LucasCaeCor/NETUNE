## ⚡ Instalação em 30 segundos

```bash
curl -sL https://raw.githubusercontent.com/LucasCaeCor/NETUNE/main/install.sh | bash


# 🚀 NETUNE — Guardião de Arquitetura de Software

> **Pare de aceitar código ruim no seu projeto.**
>
> NETUNE bloqueia automaticamente violações de arquitetura antes do código entrar em produção.

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

### 1. Clone o repositório

```bash
git clone https://github.com/LucasCaeCor/NETUNE.git
```

---

### 2. Adicione ao seu projeto

Copie:

```bash
rules/
.github/workflows/semgrep.yml
```

---

### 3. Pronto

Agora todo Pull Request será validado automaticamente.

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

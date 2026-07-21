const stats = [
  { label: 'PRs analisados', value: '10k+' },
  { label: 'Regras bloqueadas', value: '120+' },
  { label: 'Tempo de revisão', value: '-41%' },
];

const pillars = [
  'Pare de aceitar dívida técnica no PR',
  'Garanta que cada mudança respeite as regras do seu sistema',
  'Elimine retrabalho e inspeção manual de arquitetura',
];

const examples = [
  {
    title: 'Controller acessando banco',
    code: `export async function listUsers(req, res) {
  const users = await db.query('SELECT * FROM users');
  return res.json(users);
}`,
  },
  {
    title: 'Service usando HTTP',
    code: `export async function getProfile(service) {
  export function getUser(res) {
  res.json({ ok: true }); //  erro real
}
}`,
  },
  {
    title: 'console.log em produção',
    code: `export function saveUser(user) {
  console.log('salvando', user);
  return user;
}`,
  },
];

const steps = [
  'Conecte o GitHub e defina as regras do seu time',
  'O NETUNE analisa cada pull request em tempo real',
  'Violação de arquitetura vira bloqueio automático antes do merge',
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 lg:px-8">
        <div className="text-base font-semibold tracking-[0.24em] text-cyan-300">NETUNE</div>
        <a
          href="https://github.com/LucasCaeCor/NETUNE"
          className="text-sm font-medium text-slate-300 transition hover:text-white"
        >
          Ver no GitHub
        </a>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 lg:px-8">
        <section className="grid items-center gap-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              Arquitetura sob controle, PR a PR
            </div>
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Seu código não entra se quebrar a arquitetura.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              O NETUNE analisa cada pull request automaticamente e impede que código fora do padrão comprometa a estrutura do seu sistema.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/LucasCaeCor/NETUNE"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Começar agora
              </a>
              <a
                href="#como-funciona"
                className="rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
              >
                Ver como funciona
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>Backend · Node.js · TypeScript</span>
              <span>Tech leads · Engenharia</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-950/80 p-6">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2">PR review · live</span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 p-4">
                  <p className="text-sm font-semibold text-rose-200">❌ PR Bloqueado</p>
                  <p className="mt-1 text-sm text-slate-300">Controller acessando banco diretamente</p>
                </div>
                <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
                  <p className="text-sm font-semibold text-amber-200">Aviso</p>
                  <p className="mt-1 text-sm text-slate-300">Service usa HTTP fora do padrão</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                  <p className="text-sm font-semibold text-emerald-200">Conformidade</p>
                  <p className="mt-1 text-sm text-slate-300">Arquitetura preservada automaticamente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Problema</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              A dívida técnica começa no PR. E costuma passar despercebida.
            </h2>
          </div>
          <div className="space-y-3 text-lg text-slate-300">
            {pillars.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Solução</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Defenda sua arquitetura sem depender de revisão manual.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Em vez de confiar na memória do time, o NETUNE valida cada PR com regras claras e bloqueia violações antes do merge.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <div className="text-sm font-semibold text-cyan-300">0{index + 1}</div>
                <p className="mt-3 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Exemplos de erro</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Padrões que a ferramenta detecta antes do dano.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {examples.map((example) => (
              <div key={example.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm leading-7 text-slate-300">
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Benefícios</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Mais controle. Menos retrabalho. Mais velocidade.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Reduza decisões ad hoc, acelere a revisão e faça a arquitetura evoluir com consistência real.
              </p>
            </div>
            <div className="grid gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 text-center lg:p-10">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Proteja a arquitetura do seu produto sem travar o delivery.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Instale, conecte e comece a bloquear violações antes que elas se transformem em retrabalho caro.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://github.com/LucasCaeCor/NETUNE" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Começar agora
            </a>
            <a href="https://github.com/LucasCaeCor/NETUNE" className="rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:text-white">
              Ver no GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

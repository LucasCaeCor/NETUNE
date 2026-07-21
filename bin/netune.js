#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageDir = path.resolve(__dirname, '..');
const targetDir = process.cwd();

const args = process.argv.slice(2);
const command = args[0];

if (command === '--version' || command === '-v') {
  const pkgPath = path.join(packageDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    console.log(`NETUNE v${pkg.version}`);
  } else {
    console.log('NETUNE v1.0.0');
  }
  process.exit(0);
}

if (command === '--help' || command === '-h') {
  console.log(`
🌊 NETUNE CLI — Architectural Guard

Uso:
  npx netune init      Instala as regras do NETUNE e o workflow no projeto atual
  npx netune --version Exibe a versão instalada
  npx netune --help    Exibe esta mensagem de ajuda
  `);
  process.exit(0);
}

function runInit() {
  console.log('\n🌊 Instalando NETUNE no seu projeto...\n');

  const sourceRules = path.join(packageDir, 'rules');
  const destRules = path.join(targetDir, 'rules');

  const sourceWorkflow = path.join(packageDir, '.github', 'workflows', 'semgrep.yml');
  const destWorkflowDir = path.join(targetDir, '.github', 'workflows');
  const destWorkflow = path.join(destWorkflowDir, 'semgrep.yml');

  try {
    // 1. Copia regras
    if (fs.existsSync(sourceRules)) {
      const rulesExist = fs.existsSync(destRules);
      fs.cpSync(sourceRules, destRules, { recursive: true, force: true });
      if (rulesExist) {
        console.log('  ℹ️  Diretório rules/ já existente — regras atualizadas em rules/');
      } else {
        console.log('  ✅ Rules copiadas para rules/');
      }
    } else {
      console.warn('  ⚠️  Pasta rules/ não encontrada no pacote.');
    }

    // 2. Copia workflow do GitHub Actions
    if (fs.existsSync(sourceWorkflow)) {
      const workflowExists = fs.existsSync(destWorkflow);
      fs.mkdirSync(destWorkflowDir, { recursive: true });
      fs.copyFileSync(sourceWorkflow, destWorkflow);
      if (workflowExists) {
        console.log('  ℹ️  Workflow .github/workflows/semgrep.yml já existente — arquivo atualizado');
      } else {
        console.log('  ✅ GitHub Workflow criado em .github/workflows/semgrep.yml');
      }
    } else {
      console.warn('  ⚠️  Arquivo semgrep.yml não encontrado no pacote.');
    }

    console.log('\n🚀 NETUNE instalado com sucesso!');
    console.log('💡 Qualquer Pull Request agora será analisado automaticamente pelo Semgrep.\n');
  } catch (error) {
    console.error('\n❌ Erro durante a instalação do NETUNE:', error.message);
    process.exit(1);
  }
}

if (!command || command === 'init') {
  runInit();
} else {
  console.log(`Comando desconhecido: "${command}". Use "npx netune --help" para ver as opções.`);
  process.exit(1);
}

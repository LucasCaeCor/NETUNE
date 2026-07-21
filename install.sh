#!/bin/bash

echo "Instalando NETUNE..."

git clone https://github.com/LucasCaeCor/NETUNE tmp-netune

cp -r tmp-netune/rules .
mkdir -p .github/workflows
cp tmp-netune/.github/workflows/semgrep.yml .github/workflows/

rm -rf tmp-netune

echo "NETUNE instalado com sucesso!"
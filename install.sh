#!/bin/bash

echo "Instalando ARC..."

git clone https://github.com/LucasCaeCor/ARC tmp-arc

cp -r tmp-arc/rules .
mkdir -p .github/workflows
cp tmp-arc/.github/workflows/semgrep.yml .github/workflows/

rm -rf tmp-arc

echo "ARC instalado com sucesso!"
#!/bin/bash

cd unix_tests

# 1. Baixando countries.txt;
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# 2. Exibindo countries.txt;
cat countries.txt

# 3. Exibindo de forma páginada;
less countries.txt

# 4. Pesquisando por Zambia;
# less countries.txt /Zambia

# 5. Pesquisando por Brazil;
grep "Brazil" countries.txt

# 6. Pesquisando por brazil;
grep "brazil" countries.txt

# 7. Criando phrases.txt;
touch phrases.txt

# 8. Frases sem a palavra fox;
grep -v "fox" phrases.txt

# 9. Número de linahs em phrases.txt;
wc -l phrases.txt

# 10. Número de palavras;
wc -w phrases.txt

# 11. Arquivos empty;
touch empty.tbt empty.pdf

# 12. Listando arquivos;
ls

# 13. Listando somente .txt;
ls *.txt

# 14. Listando tbt e txt;
ls *.t?t

# 15. Manual do comando ls;
man ls
 

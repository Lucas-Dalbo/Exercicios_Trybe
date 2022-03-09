#!/bin/bash

# Parte 1 - Criação de Arquivos e Diretórios

# 1. Criando diretório unix_tests e indo até ele;
mkdir unix_tests
cd unix-tests

# 2. Criando um arquivo de .txt;
touch trybe.txt

# 3. Criando uma cópia;
cp trybe.txt trybe_backup.txt

# 4. Renomeando trybe.txt;
mv trybe.txt arquivo1.txt

# 5. Diretório backup;
mkdir backup

# 6. Movendo para o backup;
mv trybe.txt backup

#7. Backup 2;
mkdir backup2

# 8. Movendo de backup para backup 2;
mv backup/trybe_backup.txt backup2

# 9. Deletando backup;
rmdir backup

# 10. Renomeando backup2;
mv backup2 backup

# 11. O caminho até aqui;
pwd

# 12. Apangando backup;
rm -rf backup

# 13. Clear;
clear

# Exercícios 14 e 15, exigem um arquivo skills.txt.
echo "Internet\nUnix\nBash\nHTML\nCSS\nJavascript\nReact\nSQL" >> skills.txt

# 14. Mostrar skills;
head -n 5 skills.txt

# 15. Mostrar skills;
tail -n 4 skills.txt

# 16. Apagar .txt;
rm *.txt
 

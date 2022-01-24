#!/bin/bash

# 1. Navegando até unix_tests;
cd unix_tests

# 2. Criando skills2.txt;
echo -e "Internet\nUnix\nBash" > skills2.txt

# 3. Adicionando novas coisas;
echo -e "Java\nJava Script\nCSS\nHTML\nFlash" >> skills2.txt

# 4. Contando as linahs;
wc -l skills.txt

# 5. Criando top_skills;
sort skills.txt | head -n 3 | cat > top_skills.txt

# 6. Criando phrases2.txt;
echo -e "O Sol sempre volta\nTrybe neles\nSobe pro castelo de madeira!" > phrases2.txt

# 7. Contando as linhas que possuem br;
grep -in "br" phrases2.txt | wc -l

# 8. Contando as que não possuem br;
grep -iv "br" phrases2.txt | wc -l

# 9. Adicionando paises a phrases2;
echo -e "Camarões/nMadagascar" >> phrases2.txt

# 10. Criando um monte de coisas;
cat phrases2.txt countries.txt > bunch_of_things.txt

# 11. Ordenando as coisas;
sort bunch_of_things.txt

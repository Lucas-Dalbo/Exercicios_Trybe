# Exercícios

## Exercício 01
Crie um projeto que simulará a arquitetura que vimos em aula. Ele deverá ter um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes, que representarão a Memória Principal e a Secundária.

---
## Exercício 02
Agora vamos explorar o sistema que estamos utilizando. Crie um script chamado my_platform.py e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o módulo platform do Python.
  1. A plataforma que está sendo utilizada (linux, win32, darwin, etc);
  2. A versão (release);
  3. A arquitetura (x32 ou x64);

---
## Exercício 03
Agora vamos tanto explorar o hardware que estamos utilizando quanto aprender algo interessante: enviar programaticamente comandos para o shell. Crie um script chamado resources.py e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o método check_output do módulo subprocess do Python.
  1. Informações sobre a sua CPU (no Linux você pode usar comando lscpu, e no OSX você pode usar o comando sysctl -n machdep.cpu.brand_string);
  2. O modelo;
  3. A quantidade de cores;
  4. A velocidade em Megahertz - MHz;
  5. A quantidade de cache (L1, L2, L3).
  6. Informações sobre a memória RAM (no Linux você pode usar comando free, e no OSX você pode usar o comando top -l 1 | head -n 10 | grep PhysMem):
  7. A quantidade total de memória RAM disponível em sua máquina em megabytes - MB (faça a conversão também 😉).
  8. A quantidade total de memória RAM que está sendo utilizada em megabytes - MB.

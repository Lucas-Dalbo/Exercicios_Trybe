const somaMultiplica = require('./exercicio1');

const ramdomNumber = () => Math.floor(Math.random() * 100 + 1);

const ramdom1 = ramdomNumber();
const ramdom2 = ramdomNumber();
const ramdom3 = ramdomNumber();

async function main() {
  try {
    const resultado = await somaMultiplica(ramdom1, ramdom2, ramdom3);
    console.log('Sucesso: ' , resultado);
  } catch (e) {
    console.log('Erro: ' , e.message);
  }
}

main();

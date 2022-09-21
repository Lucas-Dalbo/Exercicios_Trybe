// ./index.ts
import CepService from './api/CepService';
import FooCepAPI from './api/FooCepAPI';
import MockCepAPI from './api/MockCepAPI';

async function main() {
  const cepSvc = new CepService(new FooCepAPI() || new MockCepAPI());
  // qualquer uma das classes satisfaz CepService, se nada for passado,
  // o padrão é FooCepAPI

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
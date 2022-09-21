// ./CepService.ts
import ICepAPI from '../interfaces/InterfaceCepAPI';
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: ICepAPI;

  constructor(api: ICepAPI = new FooCepAPI()) {
    this.cepApi = api;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
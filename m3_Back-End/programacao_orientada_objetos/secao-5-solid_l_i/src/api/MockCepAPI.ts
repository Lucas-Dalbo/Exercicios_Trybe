import ICepAPI from "../interfaces/InterfaceCepAPI";

class MockCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "Tuc Tuc"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP abobrinha"`;
  }
}
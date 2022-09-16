class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }
}

class Item {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }
};

class Pedido {
  private _cliente: Cliente;
  private _consumo: Item[];
  private _pagamento: string;
  private _desconto?: number;

  constructor(cliente: Cliente, consumo: Item[], pagamento: string, desconto?: number) {
    this._cliente = cliente;
    this._consumo = consumo;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }
};

const jorge = new Cliente('Jorge');

const batata = new Item('Batata Frita', 13.5);
const suco = new Item('Suco de Fruta', 8);
const xSalada = new Item('X-Salada', 15);
const choco = new Item('Chocolate', 3);

const pedido01 = new Pedido(jorge, [xSalada, suco, choco], 'débito', 0.1);

console.log(pedido01);
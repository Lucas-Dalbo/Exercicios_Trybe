class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = this.nameValidation(name);
    this._price = this.priceValidation(price);
  }

  private nameValidation(name: string): string {
    if (name.length < 3) throw new Error('Nome do produto deve ter ao menos 3 caracteres');
    return name;
  }

  private priceValidation(price: number): number {
    if (price < 0) throw new Error('Preço do produto não pode ser negativo');
    return price;
  }

  get name() { return this._name }
  get price() { return this._price }

  setName(name: string) { this._name = this.nameValidation(name) }
  setPrice(price: number) { this._price = this.priceValidation(price) }
}

export default OrderItem;
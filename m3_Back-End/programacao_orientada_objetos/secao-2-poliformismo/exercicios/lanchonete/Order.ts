import Person from "../Person";
import OrderItem from "./OrderItem";

export enum PayMethod {
  DINHEIRO = 'DINHEIRO',
  CARTÃO = 'CARTÃO',
  VALE = 'VALE',
}

class Order {
  static id: number = 0.1;
  private _id: string;
  private _createdAt: Date;
  private _client: Person;
  private _items: OrderItem[];
  private _paymentMethod: PayMethod;
  private _discountPerCent: number;

  constructor(cliente: Person, consumo: OrderItem[], pagamento: PayMethod, desconto: number = 0) {
    this._id = (Order.id * Date.now() * (Math.random() * 10)).toFixed(0);
    this._createdAt = new Date(Date.now());
    this._client = cliente;
    this._items = this.orderValidate(consumo);
    this._paymentMethod = pagamento;
    this._discountPerCent = this.discontValidate(desconto);

    Order.id += 0.1;
  }

  private orderValidate(value: OrderItem[]) : OrderItem[] {
    if (!value.length) throw new Error('O pedido precisa de pelo menos 1 item');
    return value;
  }

  private discontValidate(value: number): number {
    if (value < 0 || value > 50) throw new Error('Desconto inválido');
    return value;
  }

  get id() { return this._id};
  get createdAt() { return this._createdAt }
  get client() { return this._client }
  get items() { return [...this._items] }
  get paymentMethod() { return this._paymentMethod }
  get discountPerCent() { return this._discountPerCent }

  setClient(cliente: Person) { this._client = cliente }
  setItems(items: OrderItem[]) { this._items = this.orderValidate(items) }
  setPaymentMethod(metodo: PayMethod) { this._paymentMethod = metodo }
  setDiscout(desconto: number) { this._discountPerCent = this.discontValidate(desconto) }

  public calculateTotal(): string {
    const total = this._items.reduce((acc, crr) => acc + crr.price, 0);

    return total.toFixed(2);
  }

  public calculateTotalWithDiscount(): string {
    const soma = this._items.reduce((acc, crr) => acc + crr.price, 0);
    const total = soma - soma*((this._discountPerCent || 0) / 100);
    return total.toFixed(2);
  }
}

export default Order;
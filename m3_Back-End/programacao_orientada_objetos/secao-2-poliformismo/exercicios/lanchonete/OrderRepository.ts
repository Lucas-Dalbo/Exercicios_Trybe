import Person from "../Person";
import Order from "./Order";

const sortType = {
  maior: (a: Order, b: Order): number => {
    if (a.calculateTotal() > b.calculateTotal()) return 1;
    if (a.calculateTotal() < b.calculateTotal()) return -1;
    return 0
  },
  menor: (a: Order, b: Order): number => {
    if (a.calculateTotal() < b.calculateTotal()) return 1;
    if (a.calculateTotal() > b.calculateTotal()) return -1;
    return 0
  },
}

class OrderRepository {
  private _orders: Order[] = [];

  private findIndex(order: Order): number {
    const index = this._orders.findIndex((or) => or === order);
    if (index < 0) throw new Error('Pedido não encontrado');
  
    return index;
  }

  public addOrder(order: Order): void {
    this._orders.push(order);
    console.log('Pedido registrado')
  }

  public removeOrder(order: Order): void {
    const orderIndex = this.findIndex(order);
    this._orders.splice(orderIndex, 1);
    console.log('Pedido removido')
  }

  public listByClient(cliente: Person): Order[] {
    const result = this._orders.filter((or) => or.client.name === cliente.name);
    if (!result.length) throw new Error('Cliente não encontrado');

    return result;
  };

  // Relembrando Array.sort: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  public listBySortedValue(sort: 'maior' | 'menor'): Order[] {
    const result = this._orders.sort(sortType[sort]);
    return result;
  }
}

export default OrderRepository;
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let address = Object.values(order.address);
    return `Olá, ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, Rua: ${address[0]}, Nº${address[1]}, AP: ${address[2]}.`  
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Juqinha Pé de Pato';
    order['payment']['total'] = 50.01;
    let comidas = Object.keys(order.order.pizza);
    let bebidas = Object.values(order.order.drinks.coke);
    let pagamento = Object.values(order.payment);

    console.log(`Olá ${order.name}, o seu pedido de ${comidas[0]}, ${comidas[1]} e ${bebidas[0]} ficou em R$ ${pagamento[0]}.`);
  }
  
  orderModifier(order);
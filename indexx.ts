type Pizza = {
  id: number
  name: string,
  price: number
}

type Order= {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueue: Array<Order> = []

const menu = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
]

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza);
  return newPizza
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if (selectedPizza === undefined) {
    console.log(`${selectedPizza} is not available`);
    return;
  }
  cashInRegister += selectedPizza.price
  const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
  orderQueue.push(newOrder)
  return newOrder
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find(order => order.id === orderId)
  if (!order) {
    console.error(`${orderId} was not found in the order queue`)
    return;
  }
  order.status = "completed"
  return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

type Identifier = number | string

export function getPizzaDetails(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string" ) {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } else if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier)
  } else {
    throw new TypeError("Invalid identifier");
  }
}

getPizzaDetails(1)

placeOrder("Chicken Bacon Ranch")
completeOrder(1);

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

console.log("Version13");
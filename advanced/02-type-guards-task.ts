interface Order {
  address: string;
}

interface TelephoneOrder extends Order {
  callerNumber: string;
}

interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;


function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return !!order?.hasOwnProperty('email');;
}



function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder  {
  return !!order?.hasOwnProperty("callerNumber");
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}

const orderTwo: PossibleOrders = {
  address: 'somewherer',
  email: "ssadsd@mail.com",
}

makeOrder(orderTwo);



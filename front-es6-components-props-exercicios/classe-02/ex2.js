// const car = {
//   name: 'Corolla',
//   year: 2022,
//   color: 'white'
// }

// const ownerContact = {
//   phoneContact: "(00) 00000-0000",
//   owner: 'Daniel',
// }

// const infosForSale = {
//   name: car.name,
//   year: car.year,
//   color: car.color,
//   phoneContact: ownerContact.phoneContact,
//   owner: ownerContact.owner + ' Lopes',
//   price: 120000,
//   onlySale: true
// }

// console.log(infosForSale);

const car = {
  name: 'Corolla',
  year: 2022,
  color: 'white'
}

const ownerContact = {
  phoneContact: "(00) 00000-0000",
  owner: 'Daniel',
}

const infosForSale = {
  ...car,
  ...ownerContact,
  price: 120000,
  onlySale: true
}

console.log(infosForSale);

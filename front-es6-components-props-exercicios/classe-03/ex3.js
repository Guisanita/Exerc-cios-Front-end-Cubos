// const tripData = {
//   name: 'Daniel Lopes',
//   origin: 'Pres. Prudente',
//   destination: 'São Paulo',
//   date: '29/02/2022',
//   hour: '17:45'
// };

// function sayTripPath(name, origin, destination, date, hour) {
//   console.log(`
//     Olá ${name}, o seu voo que sai de ${origin} com destino a ${destination}
//     está agendado para ${date} às ${hour}!
//   `);
// };

// sayTripPath(
//   tripData.name,
//   tripData.origin,
//   tripData.destination,
//   tripData.date,
//   tripData.hour
// );

const tripData = {
  name: 'Daniel Lopes',
  origin: 'Pres. Prudente',
  destination: 'São Paulo',
  date: '29/02/2022',
  hour: '17:45'
};

function sayTripPath({ name, origin, destination, date, hour }) {
  console.log(`
    Olá ${name}, o seu voo que sai de ${origin} com destino a ${destination}
    está agendado para ${date} às ${hour}!
  `);
};

sayTripPath(
  tripData
);
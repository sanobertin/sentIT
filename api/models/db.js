// This where you can find db
// Data

const users = [];
users.push({
  name: 'Admin', email: 'Admin@sendit.dv', username: 'admin', password: 'admin1234', right: 'admin',
}); // admin acc

users.push({
  name: 'bertin', email: 'bertin@sendit.dv', username: 'bertin', password: 'admin1234', right: 'user',
});
users.push({
  name: 'user2', email: 'user2@sendit.dv', username: 'user2', password: 'admin1234', right: 'user',
});

//comment, price attribute on parcels
const parcels = [
  {
    parcelID: 1, owner: users[1].username, parcelName: 'Parcel 1',  from: 'Kigali', to:'Huye', status: 'Delivered',
  },
  {
    parcelID: 2, owner: users[2].username, parcelName: 'Parcel 2', from: 'Kigali', to:'Rwamagana', status: 'In transit',
  },
  {
    parcelID: 3, owner: users[1].username, parcelName: 'Parcel 3', from: 'Bugesera', to:'Kibungo', status: 'Canceled',
  },
  {
    parcelID: 4, owner: users[2].username, parcelName: 'Parcel 4', from: 'Muhanga', to:'Kigali', status: 'Delivered',
  },
  {
    parcelID: 5, owner: users[1].username, parcelName: 'Parcel 5', from: 'Musanze', to:'Rubavu',status: 'In transit',
  },
];
// End of data

module.exports= {parcels, users}
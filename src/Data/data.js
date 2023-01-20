import Arteon from '../assets/img/Arteon.png'
import Beetle from '../assets/img/Beetle.jpg'
import GolfCabriolet from '../assets/img/GolfCabriole.jpg'
import ShootingBrake from '../assets/img/ShootingBrake.jpg'
import VolkswagenCC  from '../assets/img/VolkswagenCC.jpg'
import BMWi8 from '../assets/img/BMWi8.jpeg'
import GClass from '../assets/img/G-Class.jpeg'
import toyota from '../assets/img/toyota.jpeg'
import Aventador from '../assets/img/Aventador.jpg'

const CarsArray=
[{
  "id":1,
  "Brand": "Arteon",
  "Make":"Volkswagen",
  "payPerMonth": "$1500.0",
  "transmission": "Manual",
  "year":2017,
  "EngineFuel": "petrol",
  "CarType": "sedan",
  "color": "green",
  "img": Arteon,
  "carMetet":"2.000 km",
  "status" :"FOR SALE"
},


{
  "id":2,
    "Brand": "Shooting Brake",
    "Make":"Volkswagen",
    "payPerMonth": "$5500.0",
    "transmission": "Automatic",
    "year":2020,
    "EngineFuel": "Diesel",
    "CarType": "Universal",
    "color": "red",
    "img": ShootingBrake,
    "carMetet":"11.000 km",
    "status" :"FOR SALE"



  },

  {
    "id":3,
    "Brand": "Beetle",
    "Make":"Volkswagen",
    "payPerMonth": "$4500.0",
    "transmission": "Manual",
    "year":2022,
    "EngineFuel": "Petrol",
    "CarType": "CUV",
    "color": "blue",
    "img": Beetle,
    "carMetet":"10.000 km",
    "status" :"FOR SALE"



  },

  {
    "id":4,
    "Brand": "Golf Cabriolet",
    "Make":"Volkswagen",
    "payPerMonth": "$3000.0",
    "transmission": "Manual",
    "year":2011,
    "EngineFuel": "Diesel",
    "CarType": "Roadster",
    "color": "red",
    "img": GolfCabriolet,
    "carMetet":"9.000 km",
    "status" :"FOR SALE"



  },

  {
    "id":5,
    "Brand": "Volkswagen CC",
    "Make":"Volkswagen",
    "payPerMonth": "$3000.0",
    "transmission": "Manual",
    "year":2012,
    "EngineFuel": "Petrol",
    "CarType": "sedan",
    "color": "white",
    "img": VolkswagenCC,
    "carMetet":"8.000 km",
    "status" :"FOR SALE"



  },


  {
    "id":6,
    "Brand": "BMW-i8",
    "Make":"BMW",
    "payPerMonth": "$5000.0",
    "transmission": "Manual",
    "year":2022,
    "EngineFuel": "Petrol",
    "CarType": "sport",
    "color": "orange",
    "img": BMWi8,
    "carMetet":"7.000 km",
    "status" :"FOR SALE"



  },

  {
    "id":7,
    "Brand": "G-class",
    "Make":"Mercedes-Benz",
    "payPerMonth": "$25000.0",
    "transmission": "Manual",
    "year":2022,
    "EngineFuel": "Diesel",
    "CarType": "sport",
    "color": "black",
    "img": GClass,
    "carMetet":"1.000 km",
    "status" :"FOR SALE"



  },
  {
    "id":8,
    "Brand": "Avalon Hybrid",
    "Make":"Toyota",
    "payPerMonth": "$1000.0",
    "transmission": "Automatic",
    "year":2016,
    "EngineFuel": "Diesel",
    "CarType": "sedan",
    "color": "red",
    "img": toyota,
    "carMetet":"2.000 km",
    "status" :"FOR SALE"
  },
  {
    "id":9,
    "Brand": "Aventador",
    "Make":"Lamborghini",
    "payPerMonth": "$51000.0",
    "transmission": "Automatic",
    "year":2021,
    "EngineFuel": "Diesel",
    "CarType": "sport",
    "color": "black",
    "img": Aventador,
    "carMetet":"4.000 km",
    "status" :"FOR SALE"

  }
]

const car_users=[{
  "id": 1,
  "fullName": "ruba Awawdeh",
  "email": "ruba@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Female"
}, {
  "id": 2,
  "fullName": "Fatima fatima",
  "email": "fatima@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Female"
}, {
  "id": 3,
  "fullName": "Dalia tomize",
  "email": "dalia@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Female"
}, {
  "id": 4,
  "fullName": "yaqoup hammouri",
  "email": "yaqoup@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Male"
}, {
  "id": 5,
  "fullName": "khaldoun halawani",
  "email": "khaldoun@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Male"
}, {
  "id": 6,
  "fullName": "yaman ahmad",
  "email": "yaman@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Male"
}, {
  "id": 7,
  "fullName": "manal amro",
  "email": "manal@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Female"
}, {
  "id": 8,
  "fullName": "ali ali",
  "email": "ali@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Male"
}, {
  "id": 9,
  "fullName": "zainab manasrah",
  "email": "zainab@gmail.com",
  "passward": '1234',
  "role": 'admin',
  "gender": "Female"
}, {
  "id": 10,
  "fullName": "ahmad amro",
  "email": "ahmad@gmail.com",
  "passward": '123',
  "role": 'user',
  "gender": "Male"
}]
export {
  CarsArray,
  car_users };

const log = console.log;
const mongoose = require("mongoose");
const { UserAuth } = require("../models/UserAuth");
const { Student } = require("../models/Student");
const { Truck } = require("../models/Truck");
<<<<<<< HEAD
const { Food } = require("../models/food");
const { Order } = require("../models/order");
=======
const { Food } = require("../models/Food");
>>>>>>> ff2b5b090a6d02a088f5bc123d9e6e6315c4bc92

// Add a new admin
const admin = new UserAuth({
  username: "admin",
  password: "admin",
  role: "Admin"
});

admin.save().then(
  res => {
    log("Successfully added admin");
    log(res);
  },
  err => {
    log("Error when adding admin");
    log(err);
  }
);

// Add a new Student
const studentAuth = new UserAuth({
  username: "user0",
  password: "user0",
  role: "Student"
});

studentAuth.save().then(
  res0 => {
    const student = new Student({
      _id: res0._id,
      name: "Tom Fairgrieve",
      phone: "6470000001",
      email: "tom@gmail.com",
      profileImg: "./user.png"
    });

    student.save().then(
      res1 => {
        log("Successfully added a student");
        log(res0);
        log(res1);
      },
      err => {
        log("Error when adding a student");
        log(err);
      }
    );
  },
  err => {
    log("Error when adding a student");
    log(err);
  }
);

// add a new truck
const truckAuth = new UserAuth({
  username: "user1",
  password: "user1",
<<<<<<< HEAD
  role: "Truck"
});

truckAuth.save().then(
  res0 => {
    const truck = new Truck({
      _id: res0._id,
      name: "Ideal Catering",
      email: "idealcatering@gmail.com",
      phone: "6470000002",
      location: "Bahen Centre for Information Technology",
      cuisine: "• American • Fast Food • Hot Dogs",
      time: "9:00 AM - 9:00 PM",
      profileImg: "./truck1.png"
    });

    truck.save().then(
      res1 => {
        log("Successfully added a truck");
        log(res0);
        log(res1);
      },
      err => {
        log("Error when adding a truck");
        log(err);
      }
    );
  },
  err => {
=======
  role: "Truck",
});

truckAuth.save().then((res0) => {
  const truck = new Truck({
    _id: res0._id,
    name: "Ideal Catering",
    email: "idealcatering@gmail.com",
    phone: "6470000002",
    location: "Bahen Centre for Information Technology",
    cuisine: "• American • Fast Food • Hot Dogs",
    time: "9:00 AM - 9:00 PM",
    profileImg: "./truck1.png"
  });

  truck.save().then((res1) => {
    log("Successfully added a truck");
    log(res0);
    log(res1);

    const beefHotDog = new Food({
      truckId: res1._id,
      name: "All Beef Hotdog",
      price: 4.0,
      category: "Hot Dogs",
      img: "./BeefHotDog.jpeg",
    });
    beefHotDog.save().then((err) => {
      if (err) log(err);
    });

    const italianSpicySausage = new Food({
      truckId: res1._id,
      name: "Italian Spicy Sausage",
      price: 4.0,
      category: "Hot Dogs",
      img: "./ItalianSpicySausage.jpeg",
    });
    italianSpicySausage.save().then((err) => {
      if (err) log(err);
    });

    const germanSausage = new Food({
      truckId: res1._id,
      name: "German Sausage",
      price: 4.0,
      category: "Hot Dogs",
      img: "./GermanSausage.jpeg",
    });
    germanSausage.save().then((err) => {
      if (err) log(err);
    });

    const chickenHotdog = new Food({
      truckId: res1._id,
      name: "Chicken Hotdog",
      price: 4.0,
      category: "Hot Dogs",
      img: "./ChickenHotDog.jpeg",
    });
    chickenHotdog.save().then((err) => {
      if (err) log(err);
    });

    const frenchFries = new Food({
      truckId: res1._id,
      name: "French Fries",
      price: 2.5,
      category: "Sides",
      img: "./FrenchFries.jpeg",
    });
    frenchFries.save().then((err) => {
      if (err) log(err);
    });

    const chickenNuggets = new Food({
      truckId: res1._id,
      name: "Chicken Nuggets",
      price: 4.5,
      category: "Sides",
      img: "./ChickenNuggets.jpg",
    });
    chickenNuggets.save().then((err) => {
      if (err) log(err);
    });

    const onionRings = new Food({
      truckId: res1._id,
      name: "Onion Rings",
      price: 1.25,
      category: "Sides",
      img: "./OnionRings.jpg",
    });
    onionRings.save().then((err) => {
      if (err) log(err);
    });

    const canadaDry = new Food({
      truckId: res1._id,
      name: "Canada Dry",
      price: 1.25,
      category: "Beverages",
      img: "./CanadaDry.jpg",
    });
    canadaDry.save().then((err) => {
      if (err) log(err);
    });

    const greenTea = new Food({
      truckId: res1._id,
      name: "Green Tea",
      price: 1.25,
      category: "Beverages",
      img: "./GreenTea.jpg",
    });
    greenTea.save().then((err) => {
      if (err) log(err);
    });
  }, (err) => {
>>>>>>> ff2b5b090a6d02a088f5bc123d9e6e6315c4bc92
    log("Error when adding a truck");
    log(err);
  }
);

// initialize some food
const beefHotdog = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Hot Dogs",
  name: "All Beef Hotdog",
  price: 4.0,
  img: "./BeefHotDog.jpeg"
});
beefHotdog.save(function(err) {
  if (err) console.log(err);
});

const italianSpicySausage = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Hot Dogs",
  name: "Italian Spicy Sausage",
  price: 4.0,
  img: "./ItalianSpicySausage.jpeg"
});
italianSpicySausage.save(function(err) {
  if (err) console.log(err);
});

const germanSausage = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Hot Dogs",
  name: "German Sausage",
  price: 4.0,
  img: "./GermanSausage.jpeg"
});
germanSausage.save(function(err) {
  if (err) console.log(err);
});

const chickenHotdog = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Hot Dogs",
  name: "Chicken Hotdog",
  price: 4.0,
  img: "./ChickenHotDog.jpeg"
});
chickenHotdog.save(function(err) {
  if (err) console.log(err);
});

const frenchFries = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Sides",
  name: "French Fries",
  price: 2.5,
  img: "./FrenchFries.jpeg"
});
frenchFries.save(function(err) {
  if (err) console.log(err);
});

const chickenNuggets = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Sides",
  name: "Chicken Nuggets",
  price: 4.5,
  img: "./ChickenNuggets.jpg"
});
chickenNuggets.save(function(err) {
  if (err) console.log(err);
});

const onionRings = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Sides",
  name: "Onion Rings",
  price: 4.5,
  img: "./OnionRings.jpg"
});
onionRings.save(function(err) {
  if (err) console.log(err);
});

const canadaDry = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Beverages",
  name: "Canada Dry",
  price: 1.25,
  img: "./CanadaDry.jpg"
});
canadaDry.save(function(err) {
  if (err) console.log(err);
});

const greenTea = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truckAuth._id,
  category: "Beverages",
  name: "Green Tea",
  price: 1.25,
  img: "./GreenTea.jpg"
});
greenTea.save(function(err) {
  if (err) console.log(err);
});

const order1 = new Order({
  _id: new mongoose.Types.ObjectId(),
  customerId: studentAuth._id,
  truckId: truckAuth._id,
  food: [
    { foodId: beefHotdog._id, quantity: 1 },
    { foodId: canadaDry._id, quantity: 2 }
  ],
  price: beefHotdog.price * 1 + canadaDry.price * 2,
  pickDate: "2019/12/27",
  pickTime: "22:10",
  noteContent: "Extra ketchup, thanks"
});
order1.save(function(err) {
  if (err) console.log(err);
});

const { UserAuth } = require("../models/UserAuth");
const { Admin } = require("../models/admin");
const { Customer } = require("../models/customer");
const { Truck } = require("../models/truck");
const { Food } = require("../models/food");
const { Order } = require("../models/order");
const mongoose = require("mongoose");

// initialize a new admin
const admin = new userAuth({
  _id: new mongoose.Types.ObjectId(),
  username: "admin",
  password: "admin",
  type: "u"
});

admin.save(function(err) {
  if (err) console.log(err);

  new Admin({
    _id: admin._id,
    name: "David Liu",
    email: "david@gmail.com",
    phone: "6470000000",
    profileImg: "./user.png"
  }).save(function(err) {
    if (err) console.log(err);
  });
});

// initialize a new customer
const customer = new userAuth({
  _id: new mongoose.Types.ObjectId(),
  username: "user",
  password: "user",
  type: "u"
});

customer.save(function(err) {
  if (err) console.log(err);

  new Customer({
    _id: customer._id,
    name: "Tom Fairgrieve",
    email: "tom@gmail.com",
    phone: "6470000001",
    profileImg: "./user.png"
  }).save(function(err) {
    if (err) console.log(err);
  });
});

// initialize a new truck
const truck = new userAuth({
  _id: new mongoose.Types.ObjectId(),
  username: "user2",
  password: "user2",
  type: "ft"
});

truck.save(function(err) {
  if (err) console.log(err);

  new Truck({
    _id: truck._id,
    name: "Ideal Catering",
    email: "idealcatering@gmail.com",
    phone: "6470000002",
    location: "Bahen Centre for Information Technology",
    type: "• American • Fast Food • Hot Dogs",
    time: "9:00 AM - 9:00 PM",
    profileImg: "./truck1.png"
  }).save(function(err) {
    if (err) console.log(err);
  });
});

// initialize some food
const beefHotdog = new Food({
  _id: new mongoose.Types.ObjectId(),
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  truckId: truck._id,
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
  customerId: customer._id,
  truckId: truck._id,
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

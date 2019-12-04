import UserImage from "../customer/images/user1.jpg";
const userData = [
  {
    utorid: "tom123",
    password: "123456",
    image: UserImage,
    name: "Tom",
    phone: "123-456-7890",
    email: "tom@mail.utoronto.ca",
    address: "",
    creditScore: 100,
    history: [
      {
        date: "2019-10-31",
        order: ["All Beef HotDog", "Chicken HotDog", "Green Tea"]
      }
    ]
  }
];

export default userData;

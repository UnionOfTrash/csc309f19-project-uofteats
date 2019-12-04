# team49

## Project Overview : UofT Eats

#### The website is :  <a href="uofteats.unoinoftrash.org">UofTEats</a>

UofTEats is a website for university students to order their food served by food trucks online. Similar to the interface of UberEats, each food truck has its own spot on UofTEats where students can get an intuitive view to all available food trucks. By clicking each truck’s view, students can order any food they want from the menu of the specific food truck and set a time to take the order from the truck.

This website is intended not only to solve the issue that students have to suffer from the extremely hot/cold weather while waiting for the order to be ready, but also save their time by ordering their lunch/dinner before the lecture is finished.


## Build the project

First clone the git

```git clone https://github.com/csc309-fall-2019/team49.git ```

then

```cd team49 ```

```npm run setup```

```npm run test```

open the localhost:3000, then you will see the login page.

## Login Users

<img src="./client/public/login.png" />

You can login to different platforms by entering the following username and password 

#### - for Student:
    username: user0

    password: user0

#### - for Truck Manager:
    username: user1

    password: user1

#### - for Admin:
    username: admin

    password: admin

## Register for User

<img src="./client/public/register.png" />

By click -> Register Here!, you can then sign up a new user account for UofTEats

## User Side

#### Search for food truck

<img src="./client/public/SearchTruck.gif">

User can search food truck by name on the main page of user side. After clicking the search icon, only trucks that match up the search key will be filtered out.

#### Add food into cart

<img src="./client/public/OrderFood.gif">

User can add food items into cart by clicking "Add to Cart" button, and increase or decrease number of items to order. 

#### Schedule pick-up

<img src="./client/public/SchedualFood.gif">

After finishing adding food into cart, user can choose a pick-up time by selecting date and time. Also, user can leave a note to the food truck by entering into an input box.

## Food Truck Owner Side

#### Incoming Orders

<img src="./client/public/FtOrders.gif">

The Food Truck Owner is eligible to decide whether to accept the incoming food order or not. All accepted food orders will be listed below

#### Done for Cook

<img src="./client/public/DoneOrder.gif">

After the food is prepared, the truck owner can click "done" button to notify the user that his/her order is ready to pick up.

#### Edit Serving Foods

<img src="./client/public/EditFood.gif">

The Food Truck owner can add new food items or delete food items as they want.

## Admin Side

#### Basic utilities

<img src="./client/public/adminViews.gif">

After login to the admin dashboard, the admin will have the access to the information of all users and food trucks by switching between "User Management" and "Food Truck Management" tabs.

<img src="./client/public/EditUser.gif">

For each entry listed blow, the admin can either edit the info or delete a user/food truck. The admin can create new user or food truck as well.

#### Search

<img src="./client/public/SearchView.gif">

When entering the Search tab, the admin can search for a paticular user or food truck by providing its Id number. On the display card of the particular user, the admin will have the ability to edit or delete.

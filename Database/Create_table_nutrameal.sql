create database NutraMeal;
use NutraMeal;

create table Users(
UserID integer primary key AUTO_INCREMENT, 
username varchar(32) not null unique,
password varchar(32) not null,
userType varchar(16) not null,
firstName varchar(32) not null,
lastName varchar(32)not null,
email varchar(64) not null,
phone long not null,
street1 varchar(64) not null,
street2 varchar(32),
city varchar(32) not null,
state varchar(32) not null,
zipcode integer not null,
createdTs timestamp not null default current_timestamp,
updatedTs timestamp not null default current_timestamp
);

create table  Restaurant(
RestaurantID integer primary key AUTO_INCREMENT,
restaurantName varchar(32) not null,
email varchar(64) not null,
phone long not null,
street1 varchar(64) not null,
street2 varchar(32),
city varchar(32) not null,
state varchar(32) not null,
zipcode integer not null,
latitude double not null,
longitude double not null,
createdTs timestamp not null default current_timestamp
);

create table Menu_Items(
FoodItemID integer primary key auto_increment,
RestaurantID integer not null,
foreign key(RestaurantID) references Restaurant(RestaurantID) on delete cascade,
foodItemName varchar(32) not null,
foodItemCost integer not null,
foodType varchar(32) not null,
category varchar(32) not null
);

create table Payment(
PaymentID integer primary key auto_increment, 
UserID integer not null,
foreign key(UserID) references Users(UserID) on delete cascade,
cardName varchar(32) not null,
cardNumber integer not null,
expiryMonth integer not null,
expiryYear integer not null,
cvv integer not null,
paymentMode varchar(32) not null,
paypalUserName varchar(32),
paymentAmount float(11) not null,
createdTs timestamp not null default (current_timestamp()),
startDate date not null default (current_date()),
endDate date not null default (current_date())
);

create table Orders(
OrderID integer primary key auto_increment,
UserId integer references Users(UserID) on delete cascade,
RestaurantID integer references Restaurant(RestaurantID) on delete cascade,
createdTs timestamp not null default (current_timestamp()),
PaymentID integer references Payment(PaymentID) on delete cascade
);

create table Cart(
OrderID integer references Orders(OrderID) on delete cascade,
FoodItemID integer references Menu_Items(FoodItemID) on delete cascade,
primary key (OrderID,FoodItemID),
quantity integer not null
);
 
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("DACKS CUISINE","dacks_orders@gmail.com",3478998484,"1785","NEREID AVENUE","Bronx","New York",10466,40.8982,-73.85096186);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("CITY PIZZA","cityp_orders@gmail.com",6463603231,"625","9 AVENUE","Manhattan","New York",10036,40.7599,-73.99158576);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("DUNKIN","customerorders@dunkin.com",7184395119,"5702","2 AVENUE","Brooklyn","New York",11220,40.6451,-73.02110918);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("EL SAMBERERO","el_support@yahoo.com",2122544188,"108","STANTON STREET","Manhattan","New York",10002,40.7212,-73.98757179);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("SUBWAY","customerorders@subway.com",2127580900,"1140","2 AVENUE","Manhattan","New York",10065,40.7613,-73.96380462);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("SHUYA CAFE DE RAMEN","ramen_orders@gmail.com",7187770430,"4231","BROADWAY","Queens","New York",11103,40.7581,-73.91720977);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("ROSELLA","rosellas_orders@gmail.com",7189313145,"3009A","MIDDLETOWN ROAD","Bronx","New York",10461,40.844,-73.83004492);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("CHIPOTLE MEXICAN GRILL","customerorders@chipotle.com",7186655238,"260","EAST 161 STREET","Bronx","New York",10451,40.8257,-73.91881643);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("TACOS GRAND CENTRAL ","grandtacosorder@yahoo.com",9176886306,"711","2 AVENUE","Manhattan","New York",10016,40.7475,-73.97392108);
insert into Restaurant (restaurantName,email,phone,street1,street2,city,state,zipcode,latitude,longitude) values ("FOREVER JERK,LLC","customersupportfj@gmail.com",7189782222,"14594","GUY R BREWER BLVD","Queens","New York",6638,40.8982,-73.76856587);

insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (1,"Veggie Wrap",10,"Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (1,"Veggie Fry Rice",7,"Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (2,"Caesar with Grilled chicken",14,"Non-Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (2,"Garden Salad",12,"Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (3,"Coffee",5,"Vegetarian","Drinks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (3,"Hash Browns",8,"Non-Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (4,"Ceviche",12,"Non-Vegetarian","Starter");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (4,"Chopped Romaine salad",10,"Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (5,"Veggie Delite",5,"Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (5,"Grilled Chicken",7,"Non-Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (6,"Shuya Ramen",14,"Non-Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (6,"Vegetable Ramen",13,"Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (7,"GARDEN SALAD",7,"Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (7,"GRILLED CHICKEN SALAD",13,"Non-Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (8,"Burrito Bowl",13,"Non-Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (8,"Salad",13,"Vegetarian","Full Meal");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (9,"Regular Nachos",9,"Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (9,"Chicken Nachos",11,"Non-Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (10,"Potato Salad",6,"Vegetarian","Snacks");
insert into menu_items (RestaurantID,foodItemName,foodItemCost,foodType,category) values (10,"Vegetable Roast Salad",8,"Vegetarian","Full Meal");


select * from Restaurant;
select * from Menu_items;
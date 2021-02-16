# Nodis Challenge
This project aims to build an API to register products using good practices and programming principles.

## How to run it
	

> To run this project it is necessary to have previously installed [npm](https://www.npmjs.com/get-npm)

Open console and clone the repository
    
    git clone https://github.com/dario13/nodis_challenge.git
    
Install dependencies:

    npm install
Run the API (check beforehand that port 3000 is not in use)

    npm start

## Context
This api aims to create a unique repository of products. These products are uniquely identified by a Gtin13 code.
Each user has a reference to that product, but the price and quantity is independent for each user.
   
The api paths are:

- POST: /user

> To limit the scope of the problem, users register only with the email.

- POST: /full_product_registration

> This route is used for when a product is loaded for the first time,
> then the product will be available for simple registration, if another
> user wishes to use it.

POST: /simple_product_registration

> It allows the registration of a product for a user indicating only the
> Gtin13, the price and the quantity.

GET: /product/:gtin13

> Returns all the information of a product

GET: /user_products/:email

> Returns all the products of a user

PUT: /user_product/:email&:gtin13

> Update the price and / or quantity of a user's product

DELETE: /user_product/:email&:gtin13

> Marks a product as removed for a user

## Logs
The logs are displayed by the console or stored in two files:

/logs/all.log 

> Log incoming traffic


/logs/error.log: 

> Logs errors

## Basic Folder Structure
/src

> the main project folder

/src/adapters

> contains the infrastructure layer components

/src/application

> contains the components of the application layer

/src/config

> the files required for project configuration

/src/domain

> contains the components of the domain layer

/src/factories
> factories for class instantiation of all layers

/test
> contains the mocks for the tests

## Architecture
The project architecture consists of 3 layers and is based on the hexagonal architecture. Here is an example of an applied use case:

![alt text](https://github.com/dario13/nodis_challenge/blob/master/NodisChallengeArchitecture.png?raw=true)


## Tech Stack

- Node
- Jest
- Typescript
- Mongoose
- Husky
- Commitizen
- Commitlint
- Gitmoji
- Morgan
- Winston
- Faker

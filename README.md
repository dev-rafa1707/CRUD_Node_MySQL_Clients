# API Node.js Express
API rest Backend server using Node.js, Express and Sequelize

### Status:
Finished

### Features
CRUD

* Create a new client record

* Get all the clients from database

* Get a client by the Id

* Update a client

* Delete a client from database


### Requirements 
1. Node.js
2. MySQL


#### devDependencies

1. dotenv
2. express
3. mysql2
4. sequelize
  
#### devDependencies
* Nodemon

#### VS Code extensions
* REST Client v0.25.1
(or you can use postman or any other tool to test requests and responses)

### How to run the application
$ git clone <https://github.com/rafaelsunhogpacheco CRUD_Node_MySQL_Clients.git>

* In the terminal, access the folder where the project was downloaded
$ cd <path>

* Install the dependencies
$ npm install

* Run the app 
$ npm start
* Server will listen on Port:3000

### How to test the project
* Endpoints

GetAll the clients
GET http://localhost:3000/client

GetByCity
GET http://localhost:3000/client/cidade/:cityname

GetbyId
GET http://localhost:3000/client/:id

Update a client using the Id
PUT http://localhost:3000/client/:id
Content-Type: application/json

    {
        "nome":"Diogo Limera Silva",
        "email":"diogo@aol.com.br",
        "cidade":"Limeira",
        "estado":"SP",
        "cep":"06730000"
    }
  
Create a client
POST http://localhost:3000/client/
Content-Type: application/json

    {
        "nome":"Maria Antonieta",
        "email":"maria@bol.com.br",
        "cidade":"Brasilia",
        "estado":"DF",
        "cep":"86490000"
    }
  


Delete a client by Id
DELETE http://localhost:3000/client/:id




### Author
Any question or issue, please contact me
dev-rafa1707
<rafa1707@gmail.com>



### License
No License required 






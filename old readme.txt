## Installation

Install the NodeJS Simple CRUD API Project as follows:

* Clone the repo using the following command:
```bash
git clone https://github.com/Yahiaa7/NodeJS-Simple-CRUD-API.git
cd NodeJS-Simple-CRUD-API
```
* Then you need to install node_modules by running this command in Terminal in the project directory:
```
npm install
```
* Then you have to create a MySQL Database, and create the .env file with this enviroment variables:
```
PORT=5000       // default port, you can choose your own
DB_HOST=''      // localhost
DB_USERNAME=''  // Default is root
DB_PASSWORD=''  // Your password if any
DB_NAME=''      // Name of the DB you created
``` 
## USAGE
Now you are all setup.
* Simply run this command to start the server:
```
node server.js
```
* You should see an output like this:
```
Server started on port 5000!
DB Connected Successfully!
DB Synced!
```
And you are good to go.

You can test the API routes on Postman or something with the same functionality.


## Routes Table
* Here is the list of the available routes you can test:

| Route             | Method | Description                            |
| ----------------- | ------ | -------------------------------------- |
| `/test`           | GET    | Tests if the server is working or not. |
| `/createItem`     | POST   | Creates a new item. Expects `name`, `description`, and optional `picture` fields in the request body. |
| `/listItems`      | GET    | Retrieves all items from the database. |
| `/getItem/:id`    | GET    | Views a specific item by its ID.       |
| `/updateItem/:id` | PUT    | Updates a specific item by its ID.     |
| `/deleteItem/:id` | DELETE | Deletes a specific item by its ID.     |

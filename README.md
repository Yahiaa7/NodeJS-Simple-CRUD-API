# Simple NodeJs server

This is a simple CRUD server using NodeJS, MySQL, and Sequelize for items.
it also has an image upload methodology using Multer lib.

## Installation
First thing is to install node_modules on your project directory by running this command in cmd in the same directory
```
npm install
```
Then you have to create a MySQL Database, and modify the .env file with this enviroment variables:
```
PORT=5000       // default port, you can choose your own
DB_HOST=''      // localhost
DB_USERNAME=''  // Default is root
DB_PASSWORD=''  // Your password if any
DB_NAME=''      // Name of the DB you created
``` 
## USAGE
Now you are all setup.
You need to install the project dependencies.
Open CMD or Terminal in your project directory and this command:
```
npm install
```
Then simply run this command to start the server:
```
node server.js
```
you should see an output like this:
```
Server started on port 5000!
DB Connected Successfully!
DB Synced!
```
and you are good to go.

You can test the API routes on Postman or something with the same functionality.
Here is the list of the available routes you can test:

### Routes Table

### Routes Table

| Route             | Method | Description                            |
| ----------------- | ------ | -------------------------------------- |
| `/test`           | GET    | Tests if the server is working or not. |
| `/createItem`     | POST   | Creates a new item. Expects `name`, `description`, and optional `picture` fields in the request body. |
| `/listItems`      | GET    | Retrieves all items from the database. |
| `/getItem/:id`    | GET    | Views a specific item by its ID.       |
| `/updateItem/:id` | PUT    | Updates a specific item by its ID.     |
| `/deleteItem/:id` | DELETE | Deletes a specific item by its ID.     |

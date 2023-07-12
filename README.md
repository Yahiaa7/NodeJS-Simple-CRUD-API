# Footbr
Simple NodeJs server
This is a simple CRUD server using NodeJS, MySQL, and Sequelize for items.
it also has an image upload methodology using Multer lib.

## Installation
first thing is to install node_modules on your project directory by running this command in cmd in the same directory
```
npm install
```
then you have to create a MySQL Database, and modify the .env file with the DB details.
```
DB_HOST=''      // localhost
DB_USERNAME=''  // default is root
DB_PASSWORD=''  // your password if any
DB_NAME=''      // and the name of the DB you created
``` 
## USAGE
after all the previous steps, it's time to run the server.
simply in the cmd at the same directory of the files, run this command:
```
node server.js
```
you should see output like this:
```
Server started on port 5000!
DB Connected Successfully!
DB Synced!
```
and you are good to go.

try the api routes on Postman or something with the same functionality.
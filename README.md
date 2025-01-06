# NodeJS Simple CRUD API

A simple Node.js and Express API demonstrating basic CRUD operations, database connectivity, and image upload functionality using Multer. This project serves as a foundational example for building RESTful services.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

 **Clone the repository:**
   ```bash
   git clone https://github.com/Yahiaa7/NodeJS-Simple-CRUD-API.git
   cd NodeJS-Simple-CRUD-API
   ```

* **Install dependencies:**
   ```bash
   npm install
   ```

* **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000       // default port, you can choose your own
     DB_HOST=''      // localhost
     DB_USERNAME=''  // Default is root
     DB_PASSWORD=''  // Your password if any
     DB_NAME=''      // Name of the DB you created

     ```

* **Start the server:**
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:5000`.

## Usage

### Create a New Item

- **Endpoint:** `POST /api/createItem`
- **Request Body - form-data:**

  ![create item form-data](./screenshots/api_workflow.png)

- **Response:**
  ```json
    {
        "message": "New Item Added Successfully!",
        "item": {
            "id": 4,
            "name": "item4",
            "description": "item 4 description",
            "picture": "images\\item-1736151089629.jpeg",
            "updatedAt": "2025-01-06T08:11:29.630Z",
            "createdAt": "2025-01-06T08:11:29.630Z"
        }
    }

  ```

### Get All Items

- **Endpoint:** `GET /api/listItems`
- **Response:**
  ```json
    {
        "page": 1,
        "pageSize": 4,
        "totalPages": 1,
        "items": [
            {
                "id": 1,
                "name": "item1",
                "description": "item 1 description",
                "picture": "images\\item-1736151022270.jpeg",
                "createdAt": "2025-01-06T08:10:22.000Z",
                "updatedAt": "2025-01-06T08:10:22.000Z"
            },
            {
                "id": 2,
                "name": "item2",
                "description": "item 2 description",
                "picture": "",
                "createdAt": "2025-01-06T08:11:01.000Z",
                "updatedAt": "2025-01-06T08:11:01.000Z"
            },
            {
                "id": 3,
                "name": "item3",
                "description": "item 3 description",
                "picture": "",
                "createdAt": "2025-01-06T08:11:16.000Z",
                "updatedAt": "2025-01-06T08:11:16.000Z"
            },
            {
                "id": 4,
                "name": "item4",
                "description": "item 4 description",
                "picture": "images\\item-1736151089629.jpeg",
                "createdAt": "2025-01-06T08:11:29.000Z",
                "updatedAt": "2025-01-06T08:11:29.000Z"
            }
        ]
    }
  ```

### View uploaded Image
You can view items images uploaded as follows: 

- **Endpoint:** `GET /api/images/imageName`

Note: All uploaded pictures can be found in the project ```Images``` folder.  


## Features

- **CRUD Operations:** Create, read, update, and delete items.
- **Database Integration:** Connects to a database for persistent storage.
- **Image Upload:** Handles image uploads using Multer.
- **RESTful Endpoints:** Follows REST architecture principles.

## Contributing

Contributions are welcome! Please follow these steps:

* Fork the repository.
* Create a new branch: `git checkout -b feature-name`.
* Make your changes and commit them: `git commit -m 'Add new feature'`.
* Push to the branch: `git push origin feature-name`.
* Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Created by [Yahiaa7](https://github.com/Yahiaa7) - feel free to contact me!

## Badges

![GitHub last commit](https://img.shields.io/github/last-commit/Yahiaa7/NodeJS-Simple-CRUD-API)
![GitHub issues](https://img.shields.io/github/issues/Yahiaa7/NodeJS-Simple-CRUD-API)
![GitHub forks](https://img.shields.io/github/forks/Yahiaa7/NodeJS-Simple-CRUD-API)
![GitHub stars](https://img.shields.io/github/stars/Yahiaa7/NodeJS-Simple-CRUD-API)

## Screenshots

![API Workflow](./screenshots/api_workflow.png)

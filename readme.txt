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

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yahiaa7/NodeJS-Simple-CRUD-API.git
   cd NodeJS-Simple-CRUD-API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     DATABASE_URL=your_database_url
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## Usage

### Get All Items

- **Endpoint:** `GET /api/items`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description of Item 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "Description of Item 2"
    }
  ]
  ```

### Create a New Item

- **Endpoint:** `POST /api/items`
- **Request Body:**
  ```json
  {
    "name": "New Item",
    "description": "Description of the new item"
  }
  ```
- **Response:**
  ```json
  {
    "id": 3,
    "name": "New Item",
    "description": "Description of the new item"
  }
  ```

### Upload an Image

- **Endpoint:** `POST /api/upload`
- **Form Data:**
  - `image`: The image file to upload.
- **Response:**
  ```json
  {
    "message": "Image uploaded successfully",
    "imageUrl": "/uploads/image.jpg"
  }
  ```

## Features

- **CRUD Operations:** Create, read, update, and delete items.
- **Database Integration:** Connects to a database for persistent storage.
- **Image Upload:** Handles image uploads using Multer.
- **RESTful Endpoints:** Follows REST architecture principles.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

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

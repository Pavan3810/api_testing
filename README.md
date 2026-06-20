# CRUD Frontend Application

## Project Overview

This is a React + Vite frontend application developed for performing CRUD operations on:

* Users
* Products
* Orders

The application integrates with a faculty-provided backend API.

---

## Tech Stack

* React
* Vite
* JavaScript
* Axios
* CSS

---

## Features

### Users

* View all users
* Add new users

### Products

* View all products
* Add new products

### Orders

* View all orders
* Create new orders
* Select users and products using dropdown menus

---

## API Integration

This project uses faculty-provided REST APIs.

### Base URL

```bash
http://10.1.152.30:5000/api
```

---

## API Endpoints

### Users

* GET `/users`
* POST `/users`

### Products

* GET `/products`
* POST `/products`

### Orders

* GET `/orders`
* POST `/orders`


---

## Installation

Clone project and install dependencies:

```bash
npm install
```

Install required packages:

```bash
npm install axios react-router-dom
```

---

## Run Application

Start development server:

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:5173
```

---

## API Configuration

File: `src/api.js`

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "http://10.1.152.30:5000/api",
});

export default API;
```

---

## Pages

### Users Page

Handles user management:

* Fetch users
* Add users

### Products Page

Handles product management:

* Fetch products
* Add products

### Orders Page

Handles order management:

* Fetch orders
* Add orders
* Dropdown selection for users and products

---

## Styling

The application uses custom CSS styling with:

* Responsive design
* Cards layout
* Form styling
* Navigation bar styling

---

## Future Enhancements

* Update functionality
* Delete functionality
* Search and filter
* Dashboard analytics
* Authentication

---

## Author

Developed by Pavan Prasad

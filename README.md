# Express Server Assignments

This repository contains solutions for various Express server assignments.

## How to Make a Basic Express Server

1. **Initialize Your Project:**

    ```bash
    npm init -y
    ```

2. **Install Express:**

    ```bash
    npm install express
    ```

3. **Create Your Server Script (app.js):**

    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    // Your Express routes and logic go here

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```

4. **Create Your First Route:**

    ```javascript
    app.get('/', (req, res) => {
      res.send('Hello, Express!');
    });
    ```

5. **Run Your Server:**

    ```bash
    node app.js
    ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the "Hello, Express!" message.

## Q.1 - Products Data API

### Description
Build a server using the HTTP module in Node.js with API endpoints for getting products data.

### API Endpoints
- `/`: Send a welcome message as "Welcome to Men & Women Dummy Data".
- `/men`: Send 10 products data for men.
- `/women`: Send 10 products data for women.
- `/other`: Send a response as "Page not found".

### Example Usage
```bash
curl http://localhost:3000
curl http://localhost:3000/men
curl http://localhost:3000/women
curl http://localhost:3000/other
```

## Q.2 - Counter Web App Backend

### Description
Create a backend for a counter web app with API endpoints for managing the counter using Express.

### API Endpoints
- `/`: Send the counter data as { "counter": counter }.
- `/increment`: Increment the counter by 1 and send the latest data as { "counter": counter }.
- `/decrement`: Decrement the counter by 1 and send the latest data as { "counter": counter }.

### Example Usage
```bash
curl http://localhost:3000
curl http://localhost:3000/increment
curl http://localhost:3000/decrement
```

## Q.3 - Basic Server with Different Routes

### Description
Create a basic server with different routes using Express.

### API Endpoints
- `/`: Send a response as { "msg": "I am homepage" }.
- `/about`: Send a response as { "msg": "I am about page" }.
- `/contact`: Send a response as { "email": "support@pwskills.com" }.

### Example Usage
```bash
curl http://localhost:3000
curl http://localhost:3000/about
curl http://localhost:3000/contact
```

## Q.4 - Random Number Generator

### Description
Build a server that generates a random number using Express.

### API Endpoint
- `/random`: Send a random number in the response as { "random": 10 }.

### Example Usage
```bash
curl http://localhost:3000/random
```


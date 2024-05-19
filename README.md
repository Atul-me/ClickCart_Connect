
# ClickCart-Connect

ClickCart-Connect is a modern e-commerce application built using ReactJS, NodeJS, ExpressJS, and MongoDB. The application features a robust user authentication system fortified with JSON Web Tokens (JWT) for enhanced security, and it is deployed globally on Vercel.

## Features

- **User Authentication**: Secure user authentication system using JWT.
- **Product Purchase**: Effortlessly browse and purchase products.
- **Reviews and Ratings**: Provide reviews and ratings for products.
- **Shopping Cart**: Add items to the cart for future purchase.
- **Shipping Details**: Seamlessly input shipping details.
- **Payment System**: Complete transactions with an integrated PayPal payment gateway.

## Live Demo

Check out the live application [here](https://click-cart-connect.vercel.app/).

## GitHub Repository

You can find the source code on GitHub [here](https://github.com/Atul-me/ClickCart_Connect.git).

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/Atul-me/ClickCart_Connect.git
cd ClickCart-Connect
```

### Backend Setup

1. Navigate to the `backend` directory.

   ```bash
   cd backend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

4. Start the backend server.

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.

   ```bash
   cd frontend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the frontend server.

   ```bash
   npm start
   ```

### Deployment

The application is deployed on Vercel. To deploy your own instance, follow Vercel's deployment documentation and connect it to your GitHub repository.

## Technologies Used

- **Frontend**: ReactJS, Redux
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: PayPal
- **Deployment**: Vercel


## License

This project is licensed under the MIT License.



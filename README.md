# Chatty (Simple Chat App)

A **real-time chat application** built using **React** and **JavaScript** for the frontend, **Node.js** and **Express** for the backend, **PostgreSQL** as the database, and **Prisma** as the ORM.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Use Credentials](#User-Credentials)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Real-time messaging**: Powered by **Socket.io** for instant communication between users.
- **User authentication**: Login, registration, and secure session management using **JWT**.
- **Private messaging**.
- **Message persistence**: Messages are stored in **PostgreSQL**.
- **Online/offline status**: Display user availability in real-time.

---

## Tech Stack

### Frontend

- **React** (UI library)
- **JavaScript** (logic and functionality)
- **React Router DOM** (routing)
- **Formik** (form handling)
- **Yup** (form validation)
- **Lucide** React (icon library)
- **Zustand** (state management)
- **Socket.io-client** (real-time communication)
- **Tailwind CSS** (styling)

### Backend

- **Node.js** (runtime)
- **Express** (server framework)
- **Socket.io** (WebSocket implementation)
- **bcrypt** (password hashing)
- **cookie-parser** (parsing cookies)
- **jsonwebtoken** (JWT for authentication)
- **Prisma ORM** (database management)

### Database

- **PostgreSQL** (relational database)

---

## Installation

### Prerequisites

- **Node.js** (version 20.17.0)
- **PostgreSQL** (version 5.20.0)
- **npm** or **yarn** (package manager)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Ashfaqur4988/chatty.git
   cd chatty
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root of your backend project:

   ```
   DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
   JWT_SECRET="your_jwt_secret_key"
   SOCKET_PORT=8080
   ```

4. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## Configuration

### Environment Variables

In the backend, you need to set up the following environment variables in your `.env` file:

- `DATABASE_URL`: The URL for your PostgreSQL database.
- `JWT_SECRET`: A secret key for signing JWT tokens.
- `SOCKET_PORT`: The port for the Socket.io server (default: `8080`).

---

## Database Schema

Here’s an example of the schema for your chat app:

```prisma
model User {
  id               String   @id @default(cuid())
  username         String   @unique
  email            String
  password         String
  gender           Gender?
  profilePic       String?
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  conversationsIds String[]

  conversations Conversation[]
  messages      Message[]
}

enum Gender {
  male
  female
}

model Conversation {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  participantIds String[]
  participants   User[]

  messageIds String[]
  messages   Message[]
}

model Message {
  id String @id @default(cuid())

  conversations   Conversation @relation(fields: [conversationsId], references: [id])
  conversationsId String

  sender   User   @relation(fields: [senderId], references: [id])
  senderId String

  body      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## API Endpoints

### Authentication

- **POST** `/api/auth/signup`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user and return a JWT..
- **POST** `/api/auth/logout`: Log out the user and clear the session.
- **GET** `/api/auth/me`: Get logged in user details.

### Messages

- **GET** `/api/messages/:senderId`: Get all messages for with a specific user.
- **POST** `/api/messages/send/:receiverId`: Send a new message to a user.

### Conversations

- **GET** `/api/messages/conversations`: Get all conversations for the logged-in user.

---

## Usage

1. Register or log in to access the chat.
2. Create a conversation with another user.
3. Send messages in real-time.
4. See which users are online.

---

## User Credentials

To test the app user can enter these credentials:

```bash
User One
username: tony
password: Tony@123

User Two
username: robin
password: Robin@123

```

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

You can now customize it with your app’s details!
```

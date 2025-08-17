# iNotebook-MERN Project Note

## Project Overview
**iNotebook** is a full-stack note-taking application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, read, update, and delete personal notes with user authentication and authorization.

**Live Demo:** https://i-notebook-mern-six.vercel.app/

## Tech Stack

### Frontend
- **React.js 18.2.0** - UI framework with functional components and hooks
- **React Router DOM 6.10.0** - Client-side routing and navigation
- **React Context API** - State management (no Redux needed)
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 4.18.2** - Web application framework
- **MongoDB 5.3.0** - NoSQL database
- **Mongoose 7.0.3** - MongoDB object modeling tool
- **JWT (jsonwebtoken 9.0.0)** - Authentication and authorization
- **bcryptjs 2.4.3** - Password hashing
- **express-validator 6.15.0** - Input validation
- **CORS 2.8.5** - Cross-origin resource sharing

## Project Architecture

### Backend Structure
```
backend/
├── models/          # Database schemas (User, Note)
├── routes/          # API endpoints (auth, notes)
├── middleware/      # JWT authentication middleware
├── db.js           # Database connection
└── index.js        # Server entry point
```

### Frontend Structure
```
frontend/
├── components/      # React components
├── context/        # React Context for state management
├── src/            # Source code
└── public/         # Static assets
```

## Key Features

### 1. User Authentication
- User registration with validation
- User login with JWT tokens
- Password hashing using bcryptjs
- Protected routes using middleware

### 2. Note Management (CRUD Operations)
- **Create**: Add new notes with title, description, and tags
- **Read**: Fetch all notes for authenticated user
- **Update**: Edit existing notes
- **Delete**: Remove notes with ownership validation

### 3. Security Features
- JWT-based authentication
- Password hashing and salting
- Input validation and sanitization
- User-specific data isolation
- Protected API endpoints

### 4. User Experience
- Responsive design
- Real-time alerts and notifications
- Clean and intuitive interface
- Client-side state management

## Database Schema

### User Model
```javascript
{
  name: String (required, min 3 chars),
  email: String (required, unique),
  password: String (required, min 3 chars),
  date: Date (default: current date)
}
```

### Note Model
```javascript
{
  user: ObjectId (ref: 'user'),
  title: String (required, min 3 chars),
  description: String (required, min 5 chars),
  tag: String (default: "General"),
  date: Date (default: current date)
}
```

## API Endpoints

### Authentication Routes
- `POST /api/auth/createuser` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/getuser` - Get user details (protected)

### Notes Routes
- `GET /api/notes/fetchallnotes` - Get all user notes (protected)
- `POST /api/notes/addnote` - Create new note (protected)
- `PUT /api/notes/updatenote/:id` - Update note (protected)
- `DELETE /api/notes/deletenote/:id` - Delete note (protected)

## State Management
- **React Context API** for global state
- **useState** for local component state
- **localStorage** for token persistence
- **fetch API** for HTTP requests

## Deployment
- **Frontend**: Vercel
- **Backend**: Node.js hosting
- **Database**: MongoDB Atlas (cloud)

## Key Implementation Details

### JWT Authentication Flow
1. User registers/logs in
2. Server validates credentials
3. JWT token generated and sent to client
4. Token stored in localStorage
5. Token sent with each API request in headers
6. Middleware validates token for protected routes

### Security Measures
- Password hashing with salt rounds
- JWT secret key protection
- Input validation and sanitization
- User ownership verification for notes
- CORS configuration for security

### Error Handling
- Comprehensive try-catch blocks
- HTTP status codes
- User-friendly error messages
- Validation error responses

## Performance Optimizations
- Client-side state management
- Efficient API calls
- Minimal re-renders with React Context
- Responsive design for mobile devices

## Future Enhancements
- Search and filter functionality
- Note categories and tags
- Rich text editor
- File attachments
- Collaborative notes
- Offline functionality
- Push notifications

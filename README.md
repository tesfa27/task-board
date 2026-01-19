# Task Board - Full Stack Task Management Application

A modern task management application built with React and Node.js that allows users to create, edit, and manage tasks across different status columns.

## 🚀 Features

- **Task Management**: Create, edit, update, and delete tasks
- **Status Tracking**: Organize tasks by status (In Progress, Completed, Won't Do)
- **Editable Board**: Click-to-edit board name functionality
- **Persistent Storage**: Tasks and boards saved to MongoDB
- **Unique Board URLs**: Each board accessible via `/board/:board-id`
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Instant UI updates with optimistic rendering

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
task-board/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/         # Database schemas
│   │   ├── routes/         # API routes
│   │   ├── config/         # Database configuration
│   │   └── app.js          # Express app setup
│   ├── server.js           # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── store/          # Zustand store
│   │   ├── api/            # API client
│   │   └── data/           # Static data
│   ├── public/             # Static assets
│   └── package.json
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/taskboard
PORT=3000
```

4. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
VITE_API_BASE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📋 API Endpoints

### Boards
- `POST /api/boards` - Create new board
- `GET /api/boards/:id` - Get board by ID
- `PUT /api/boards/:id` - Update board
- `DELETE /api/boards/:id` - Delete board

### Tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🎯 Usage

1. **First Visit**: A new board is automatically created with default tasks
2. **Task Management**: Click on tasks to edit name, description, icon, and status
3. **Add Tasks**: Click "Add new task" to create new tasks
4. **Edit Board**: Click on board title to rename it
5. **Persistent URLs**: Each board has a unique URL for easy sharing

## 🔧 Key Implementation Details

- **State Management**: Zustand store handles all application state
- **API Integration**: Custom API client with error handling
- **URL Routing**: Manual URL handling for board-specific routes
- **Data Persistence**: localStorage backup with MongoDB primary storage
- **Optimistic Updates**: UI updates immediately, syncs with backend

## 🚀 Deployment

For production deployment:

1. Build frontend:
```bash
cd frontend && npm run build
```

2. Set production environment variables
3. Deploy backend to your preferred hosting service
4. Deploy frontend build to static hosting service

## 📝 License

MIT License - feel free to use this project for learning and development.
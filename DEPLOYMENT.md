# Docker Deployment Guide

## Setup Instructions

1. **Update Environment Variables**
   ```bash
   # Edit .env file and replace with your GitHub username
   GITHUB_USERNAME=your-actual-github-username
   ```

2. **Deploy on Any Server**
   ```bash
   # Clone repository
   git clone https://github.com/your-username/task-board.git
   cd task-board
   
   # Update .env with your GitHub username
   nano .env
   
   # Pull and start services
   docker-compose pull
   docker-compose up -d
   ```

3. **Access Application**
   - Frontend: http://your-server-ip
   - Backend API: http://your-server-ip:3000
   - MongoDB: localhost:27017 (internal)

## Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Update images
docker-compose pull
docker-compose up -d
```

## Ports
- Frontend: 80
- Backend: 3000
- MongoDB: 27017
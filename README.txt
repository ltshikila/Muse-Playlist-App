## Steps to Run the Application

1. **Navigate to the Project Directory**:
   Open a terminal and navigate to the root directory of the project:

   ```bash
   cd /path/to/220playlist
   ```

2. **Build the Docker Containers**:
   Run the following command to build the Docker containers:

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build the images defined in the Dockerfiles for both the backend and frontend.
   - Create and start the containers.

3. **Accessing the Application**:
   Once the containers are running, you can access the application:
   - Frontend: Open your web browser and navigate to `http://localhost:3000`.
   - Backend: The backend API will be accessible at `http://localhost:3001`.

4. **Stopping the Containers**:
   To stop the running containers, you can press `CTRL+C` in the terminal where you started Docker Compose. Alternatively, you can run:

   ```bash
   docker-compose down
   ```

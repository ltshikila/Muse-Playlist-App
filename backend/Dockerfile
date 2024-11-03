# Use Node.js 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ../package.json ./
COPY ../package-lock.json ./

# Copy the rest of the backend files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3001

# Command to run the application
CMD ["node", "server.js"]

# Use Node.js 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ../package.json ./
COPY ../package-lock.json ./

# Copy the rest of the frontend files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]  
# Adjust based on how your frontend app is started
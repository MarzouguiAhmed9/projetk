# Use an official Node.js runtime as a parent image
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Build the Angular application for production (corrected flag)
RUN npm run build -- --configuration=production

# Expose the port
EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]

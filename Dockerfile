# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /bookstore

# Copy the current directory contents into the container at /app
COPY public/ /bookstore/public
COPY src/ /bookstore/src
COPY package.json /bookstore/

# Install any needed packages specified in package.json
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
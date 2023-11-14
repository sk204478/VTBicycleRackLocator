# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package.json ./
COPY package-lock.json ./

# Install app dependencies
# If you're using npm ci in your local development and you have a package-lock.json, use that
RUN npm ci --only=production

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 8080

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "server.js"]

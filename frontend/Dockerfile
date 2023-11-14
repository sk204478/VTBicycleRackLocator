# Stage 1: Build the React application
FROM node:16 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the build directory with serve
FROM node:16 AS production
WORKDIR /app
# Install serve
RUN npm install -g serve
# Copy the build directory from the build stage
COPY --from=build /app/build ./build
# Indicate the port on which serve is running
EXPOSE 5000
# Serve the build directory on port 5000 (default for serve)
CMD ["serve", "-s", "build", "-l", "5000"]

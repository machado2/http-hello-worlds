# Use an official Node runtime as the parent image
FROM node

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY src src

# Make port 80 available to the world outside this container
EXPOSE 80
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
# Run server.js when the container launches
CMD ["npx", "tsx", "src/server.ts"]

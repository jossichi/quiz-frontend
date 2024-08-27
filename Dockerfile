# Use the official Node.js image.
FROM node:18 AS build

# Set working directory.
WORKDIR /app

# Install dependencies.
COPY package.json package-lock.json ./
RUN npm install

# Copy application code.
COPY . .

# Build the app.
RUN npm run build

# Use a minimal server image to serve the app.
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx is listening on.
EXPOSE 80

# Start Nginx.
CMD ["nginx", "-g", "daemon off;"]

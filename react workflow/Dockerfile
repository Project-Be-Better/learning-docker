# Stage 1: Build the application
FROM node:lts-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "./"]

# Install all dependencies (including dev dependencies)
RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:lts-alpine AS production

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Install production dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent

# Install serve to serve the static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the built files
CMD ["serve", "-s", "dist"]

# Use Node.js 20 (LTS) - REQUIRED for import.meta.dirname
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy application code
COPY . .

# Build the application (TypeScript → JavaScript)
RUN npm run build

# Remove dev dependencies after build (keeps image small)
RUN npm prune --production

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]

# Use Node.js 20 (LTS) - REQUIRED for import.meta.dirname
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies
RUN npm ci

# Copy application code
COPY . .

# Build the application (TypeScript → JavaScript)
RUN npm run build

# NOTE: We keep dev dependencies because esbuild bundles with --packages=external
# and server/vite.ts has top-level imports of 'vite' package
# This is needed even in production due to how the code is structured

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]

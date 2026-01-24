FROM node:20-alpine

WORKDIR /app

# Install dependencies (including devDependencies so typescript is available for build)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Set production environment for runtime
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["npm", "start"] 
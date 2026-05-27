# ─────────────────────────────────────────────
# Stage 1: Use official lightweight Node image
# ─────────────────────────────────────────────
FROM node:20-alpine


WORKDIR /app

# Copy dependency manifests first (layer caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy the rest of the application source
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Default environment variable (overridable at runtime)
ENV PORT=3000

# Health-check so orchestrators know the container is ready
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:3000 || exit 1

# Start the application
CMD ["node", "app.js"]

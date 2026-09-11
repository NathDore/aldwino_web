FROM node:20-alpine AS dev
WORKDIR /app
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
RUN npm ci
COPY . .
CMD ["npm", "run", "dev", "-w", "apps/web", "--", "--host"]
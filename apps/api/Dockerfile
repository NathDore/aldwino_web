FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
RUN npm ci

FROM base AS dev
COPY . .
CMD ["npm", "run", "dev", "-w", "apps/api"]

FROM base AS build
COPY . .
RUN npm run build -w apps/api

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/apps/api/package*.json ./
RUN npm ci --omit=dev
CMD ["node", "dist/index.js"]
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY apps ./apps
COPY packages ./packages
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate && npm run build -w apps/api
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 4000
CMD ["node","apps/api/dist/server.js"]

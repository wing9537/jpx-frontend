# syntax=docker/dockerfile:1.4

FROM node:lts AS builder
WORKDIR /opt/workspace
COPY . .

RUN npm install -g pnpm
RUN rm -rf node_modules
RUN pnpm install --force

FROM builder AS development
CMD pnpm run dev

FROM builder AS production
CMD pnpm run build

FROM nginx:latest
COPY --from=production dist /usr/share/nginx/html
COPY --from=production nginx /etc/nginx
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build
#RUN npm run build-storybook


FROM nginx:stable-alpine as runner
COPY --from=builder /app/dist /usr/share/nginx/html
#COPY --from=builder /app/storybook-static /usr/share/nginx/html/sb
COPY dev-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

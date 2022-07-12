FROM node:14-alpine AS react-build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS web-server
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80

# Essa configuração roda a aplicação em uma build de produção. 
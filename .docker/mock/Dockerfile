FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /db
RUN npm install -g json-server --save-dev
COPY . .
EXPOSE 3010
EXPOSE 3000
RUN chown -R node /db
USER node

#https://www.npmjs.com/package/json-server#cli-usage
CMD ["json-server","-H" , "0.0.0.0", "db.json" ]

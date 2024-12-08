FROM alpine:latest
WORKDIR /app
COPY . .
RUN apk update
RUN apk add --no-cache nodejs yarn openssl1.1-compat
RUN yarn
RUN yarn build
ENTRYPOINT ["yarn", "start"]
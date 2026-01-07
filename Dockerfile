FROM node:23-alpine as builder

WORKDIR /chatbot-dashboard

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps
RUN apk update && apk add --no-cache git tzdata

COPY . .

RUN npm run build

FROM node:23-alpine as runner
WORKDIR /chatbot-dashboard

COPY --from=builder /chatbot-dashboard/package.json .
COPY --from=builder /chatbot-dashboard/package-lock.json .
COPY --from=builder /chatbot-dashboard/next.config.ts .
COPY --from=builder /chatbot-dashboard/public ./public
COPY --from=builder /chatbot-dashboard/.next/standalone ./
COPY --from=builder /chatbot-dashboard/.next/static ./.next/static

RUN chown -R node:node /chatbot-dashboard
USER node

EXPOSE 3000
CMD ["node", "server.js"]

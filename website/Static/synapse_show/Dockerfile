FROM node:lts as dependencies
WORKDIR /synapse_show
COPY package.json .
RUN npm install

FROM node:lts as builder
WORKDIR /synapse_show
COPY . .
COPY --from=dependencies /synapse_show/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /synapse_show
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /synapse_show/next.config.js ./
COPY --from=builder /synapse_show/public ./public
COPY --from=builder /synapse_show/.next ./.next
COPY --from=builder /synapse_show/node_modules ./node_modules
COPY --from=builder /synapse_show/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
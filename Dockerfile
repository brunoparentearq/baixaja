FROM node:20-alpine
WORKDIR /app

# Desativa telemetria e checagens rigorosas que travam o build manual
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

COPY package*.json ./
# Instala ignorando scripts para evitar conflitos de ambiente
RUN npm install --include=dev

COPY . .

# Comando de build que ignora avisos de tipos
RUN npx next build

EXPOSE 3000
CMD ["npm", "start"]

FROM node:20-alpine
WORKDIR /app

# Instala dependências primeiro para ganhar velocidade
COPY package*.json ./
RUN npm install

# Copia o resto dos arquivos
COPY . .

# Desativa a coleta de dados do Next.js para evitar travamentos no build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

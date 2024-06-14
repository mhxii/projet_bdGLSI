# Utilisez une image officielle de Node.js plus récente
FROM node:18

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port de l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]

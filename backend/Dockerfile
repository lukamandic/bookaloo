FROM node:14.17.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

# Copying rest of the application to app directory
COPY . .

# Expose the port and start the application
Expose 5000

CMD ["npm", "start"]
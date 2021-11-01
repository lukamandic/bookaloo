FROM node:14.17.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install -g create-react-app

RUN npm install react-scripts

RUN npm install

# Copying rest of the application to app directory
COPY . .

# Expose the port and start the application
Expose 3000

CMD ["npm","start"]
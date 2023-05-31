# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY app app 
COPY components components 
COPY public public 
COPY styles styles
COPY .eslintrc.json next.config.js tsconfig.json ./

# Build the Next.js application
RUN npm run build

# Expose the default Next.js port
EXPOSE 3000

# Set the command to start the Next.js application
CMD ["npm", "start"]
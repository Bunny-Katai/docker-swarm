FROM node:16.3.0

LABEL maintainer = "Tai" 
LABEL description = "User Manager App"
LABEL cohort = "Cohort 12"
LABEL animal = "Dolphin"

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]

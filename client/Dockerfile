# Set up base node image
FROM node:lts-alpine3.16 as build

# Set up the Docker Working Directory
ENV HOME=/usr/src/app
RUN mkdir -p $HOME
WORKDIR $HOME

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Pulls in the package.json file and installs all the node dependencies
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json $HOME
COPY yarn.lock $HOME
RUN yarn

# Copies the host machine folder(s) into the docker container so you can develop on your host machine
COPY . $HOME

# Create production build
RUN yarn build

# Production environment
FROM nginx:stable
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
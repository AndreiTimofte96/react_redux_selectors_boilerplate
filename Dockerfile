FROM node:8.15.0

RUN apt-get update && apt-get install -y libgl-dev

WORKDIR /code
ENV NODE_ENV development

COPY package.json ./

COPY . ./

RUN curl https://cli-assets.heroku.com/install.sh | sh

COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["npm", "start"]

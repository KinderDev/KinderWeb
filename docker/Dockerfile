FROM node:10-stretch

ARG MAINTAINER="Derick Phan <dtph@ucdavis.edu>"
ARG BRANCH="master"
ARG COMMIT="local-build"
ARG TAG=""
ARG REPO="local"

LABEL branch=${BRANCH}
LABEL commit=${COMMIT}
LABEL tag=$TAG
LABEL repo=https://github.com/${REPO}
LABEL maintainer=${MAINTAINER}

MAINTAINER ${MAINTAINER}

# Allow exposing HTTP endpoint
EXPOSE 9000

# Add project source
COPY . /code

# Setup work directory
WORKDIR /code

# Create directory for storing logs
RUN mkdir /code/logs

# Install dependencies
RUN npm cache clean --force
RUN npm install

ENV GIT_COMMIT_SHA=${COMMIT}
ENV GIT_COMMIT_BRANCH=${BRANCH}
ENV GIT_SLUG=${REPO}

# Run build
RUN npm install -g nodemon

# Default command to start the server
CMD ["nodemon", "server"]

# Patient Zero Docker setup

There are two main parts of the application

- `back-end`
- `front-end`

They both hold their own `README.md` so please follow them if you need further information.

## Setup
This helps setting up the database and start the application in docker.

## Requirements

Docker: `brew install --cask docker`


## Running
From terminal run:
- `docker-compose build`
- `docker-compose up`


### front-end
Above commands start the front-end on: http://localhost:3000
  - React
  
### - back-end
Above commands start the back-end on: http://localhost:4000
  - Node
  - Express
  - Typescript

### Database - from docker
  - Mongo 5
# Patient Zero - Coding Exercise

Cheeseria backend API

# Getting Started

## Tech Stack

- Node JS
- Mongodb
- Mongoose
- Swagger

## Setup from GIT

- Download the code from git

- Install the dependencies

```
npm install
```

- Run the app in the development mode.

```
npm run dev
```

Please make sure the mongo db is running in docker or you have a local mongod instance.

**If you are not running the app in docker, please use this for DB_CONNECTION_STRING
DB_CONNECTION_STRING="mongodb://localhost:27017/"**

Api would be listening on [http://localhost:4000](http://localhost:4000).

# Code Structure and Organization

The app has been organised in the following folder structure

- `config` holds all the configuration related files. It homes the connection to db, any migration scrips to run and swagger doc etc,

- `domains` is where we may define our object structure. In our case, it is just Cheese so we have the `Cheese` class that tells us what properties it needs in the form of data.

- `models` hold db models. We are using `mongodb` so db schemas would go in there.

- `middleWares` hold middlewares like error handling, rootMiddleware. These are the non api based middlewares. 

- `repositories` just hold files that interact with the database. 

- `services` is the middle layer for logic. It sits in the middle between controllers and repositories.

- `cheeseRouter` it holds api endpoints for the cheese CRUD functions.

- `.env` holds enviroenment variables to facilitate development & production environment. For thsi project, I just focused it for development but possibly a second environment file for production would be needed.

## Swagger 

All the api docs can be found on

[http://localhost:4000/api-docs](http://localhost:4000/api-docs)

## TypeScript/JavaScript rules

- Single Quotes
- Trailing comma
- Add semicolon
- Provide type where possible
- 
> Prettier has been used to help enforce the rules

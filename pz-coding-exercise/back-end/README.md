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

Please make sure the docker is running as per instructions as it starts mongodb database.

Api would be listening on [http://localhost:4000](http://localhost:4000).

# Code Structure and Organization

The app has been organised in the following folder structure

- `db` holds all the database related files. It homes the connection to db, any migration scrips to run and model for the database etc,

- `domain` is where we may define our object structure. In our case, it is just Cheese so we have the `Cheese` class that tells us what properties it needs in the form of data.

- `repositories` just hold files that interact with the database. 

- `services` is the middle layer for logic. It sits in the middle between controllers and repositories.

- `controller` even though there is no distinction for that in the project, `cheese.router.ts` holds api endpoints for the cheese CRUD functions.

- `.env` holds enviroenment variables to facilitate development & production environment. For thsi project, I just focused it for development but possibly a second environment file for production would be needed.

## Swagger 

All the api docs can be found on

[http://localhost:4000/api-docs](http://localhost:4000/api-docs)

## JSX/JavaScript rules

- Single Quotes
- Trailing comma
- Add semicolon

> Prettier has been used to help enforce the rules

# Cheeseria App

This application shows available cheeses and calculate cost for the user if they are interested to know.

![Cheeseria App](https://i.ibb.co/cNBtsMS/Screen-Shot-2022-05-21-at-7-25-43-pm.png)

# Getting Started

## Tech Stack

- React.JS
- SASS

## Setup

- Download the code from git

- Install the dependencies

```
npm install
```

- Run the app in the development mode.

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Code Structure and Organization

The app code has been organized into components and it follows atomic style distribution structure. `pages` which are the containers and `components` which are the individual components that make up a page. Based on atomic structure guideline, it is further divided into molecules and atoms. Atoms are the smallest component whereas `molecules` are composed of components from `atoms`.

## Pages, Molecules & Atoms

- Pages are the main containers which are the entry point in the app.

## Components

- I have used `functional components` and `class-based component` both in the application. A general rule of thumb is if the component doesn't need to maintain state, create it as `functional component`.

- All the components reside in the `components` dir. `pages` is another component but to make it flexible for features like `react-router` & `authentication & authorisation`, it has been maintained under the folder called `pages`.

- a typical component structure is a component file with name `abc.jsx` & its style in sass as `abc.module.jsx`

```bash
└── components
        ├── abc.jsx
        └── abc.module.jsx
```

- Use `Function expressions` to declare function

```javascript
const foo = () => {
  return 'Hello';
};
```

## Testing

- Jest [Jest](https://jestjs.io/docs/en/getting-started.html) has been used to perform Unit Testing.

## Styling

- I used [SASS](https://sass-lang.com/)

## JSX/JavaScript rules

- Single Quotes
- Trailing comma
- Add semicolon

> Prettier has been used to help enforce the rules
